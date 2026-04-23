import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cookieParser());
  app.use(express.json());

  // API Routes
  app.get("/api/auth/google/url", (req, res) => {
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      return res.status(400).json({ error: "Google OAuth credentials are not configured" });
    }

    const oauth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    const origin = process.env.APP_URL || `https://${req.headers.host}`;
    const redirectUri = `${origin}/auth/google/callback`;
    
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/userinfo.profile"],
      redirect_uri: redirectUri,
      prompt: "consent"
    });
    res.json({ url });
  });

  app.get(["/auth/google/callback", "/auth/google/callback/"], async (req, res) => {
    const code = req.query.code as string;
    const origin = process.env.APP_URL || `https://${req.headers.host}`;
    const redirectUri = `${origin}/auth/google/callback`;

    try {
      const oauth2Client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );

      const { tokens } = await oauth2Client.getToken({
        code,
        redirect_uri: redirectUri
      });
      
      // Store token in cookie
      // Secure: true, SameSite: 'none' is mandatory for iframes
      res.cookie("google_drive_token", tokens.access_token, {
        httpOnly: true,
        secure: true, 
        sameSite: "none",
        maxAge: 3600000 // 1 hour
      });

      res.send(`
        <html>
          <body style="font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #0B1221; color: white;">
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', provider: 'google' }, '*');
                setTimeout(() => window.close(), 1000);
              } else {
                window.location.href = '/';
              }
            </script>
            <div style="background: rgba(59,130,246,0.1); border: 1px border rgba(59,130,246,0.2); padding: 2rem; rounded-radius: 2rem;">
              <h2 style="color: #60A5FA;">Kết nối thành công!</h2>
              <p>Cửa sổ này sẽ tự đóng sau giây lát...</p>
            </div>
          </body>
        </html>
      `);
    } catch (error) {
      console.error("Error exchanging code for tokens:", error);
      res.status(500).send("Authentication failed. Please check your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.");
    }
  });

  app.get("/api/drive/files", async (req, res) => {
    const token = req.cookies.google_drive_token;
    if (!token) {
      return res.status(401).json({ error: "Chưa kết nối Google Drive" });
    }

    try {
      const response = await axios.get("https://www.googleapis.com/drive/v3/files", {
        params: {
          q: "mimeType='application/pdf'",
          fields: "files(id, name, thumbnailLink, webContentLink, iconLink, size, modifiedTime)",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      res.json(response.data);
    } catch (error: any) {
      console.error("Error fetching Drive files:", error?.response?.data || error.message);
      res.status(error?.response?.status || 500).json(error?.response?.data || { error: "Failed to fetch files" });
    }
  });

  app.get("/api/drive/status", (req, res) => {
    const token = req.cookies.google_drive_token;
    res.json({ connected: !!token });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
