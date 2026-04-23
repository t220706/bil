import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getBookRecommendations(interest: string) {
  if (!process.env.GEMINI_API_KEY) {
    return "Hãy cấu hình API Key để nhận gợi ý từ AI nhé!";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tôi là một bạn trẻ yêu thích: ${interest}. Hãy gợi ý cho tôi 3 cuốn sách hay bằng tiếng Việt. Trả về dưới dạng JSON list [{title, author, reason}].`,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
