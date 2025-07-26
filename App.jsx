import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import FIRGenerator from './pages/FIRGenerator';
import CrimeMap from './pages/CrimeMap';
import ScamChatbot from "./pages/ScamChatbot";
import UserDashboard from './pages/UserDashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() { 
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
 
  return (
    <Router>
      <div className={`app-wrapper ${darkMode ? 'dark' : 'light'}`}>
        {/* Header */}
        <header className="header">
          <div className="logo">🛡️ CyberCop</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/fir">FIR</Link>
            <Link to="/chatbot">Chatbot</Link>
            <Link to="/map">Map</Link>
            <Link to="/dashboard">Dashboard</Link>

            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '🌞' : '🌙'}
            </button>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fir" element={<FIRGenerator />} />
          <Route path="/chatbot" element={<ScamChatbot />} />
          <Route path="/map" element={<CrimeMap />} />
          <Route path="/dashboard" element={<UserDashboard />} />

        </Routes>

        <footer id="footer" className="footer">
          <p>© 2025 CyberCop. Built at the intersection of AI, Bharat, and Justice.</p>
          <p>Made with ❤️ by students, for citizens</p>
          <div className="footer-links">
            <a href="https://india.gov.in" target="_blank" rel="noreferrer">India.gov.in</a>
            <a href="#">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
