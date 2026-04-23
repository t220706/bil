import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import Library from './pages/Library';
import Community from './pages/Community';
import Competitions from './pages/Competitions';
import Multimedia from './pages/Multimedia';
import Learning from './pages/Learning';
import Leaderboard from './pages/Leaderboard';
import Awards from './pages/Awards';
import Events from './pages/Events';
import Profile from './pages/Profile';
import WithComingSoon from './components/WithComingSoon';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-bento-bg scrollbar-none">
        <Navigation />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-x-hidden pt-4 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/multimedia" element={<Multimedia />} />
              
              {/* Features Under Development */}
              <Route path="/community" element={<WithComingSoon><Community /></WithComingSoon>} />
              <Route path="/learning" element={<WithComingSoon><Learning /></WithComingSoon>} />
              <Route path="/competitions" element={<WithComingSoon><Competitions /></WithComingSoon>} />
              <Route path="/leaderboard" element={<WithComingSoon><Leaderboard /></WithComingSoon>} />
              <Route path="/awards" element={<WithComingSoon><Awards /></WithComingSoon>} />
              <Route path="/events" element={<WithComingSoon><Events /></WithComingSoon>} />
              <Route path="/profile" element={<WithComingSoon><Profile /></WithComingSoon>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
