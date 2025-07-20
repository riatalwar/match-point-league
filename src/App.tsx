import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './templates/Home';
import About from './templates/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Placeholder routes for future pages */}
            <Route path="/tennis/tournaments" element={<div>Tennis Tournaments - Coming Soon</div>} />
            <Route path="/tennis/community" element={<div>Tennis Community - Coming Soon</div>} />
            <Route path="/pickleball/tournaments" element={<div>Pickleball Tournaments - Coming Soon</div>} />
            <Route path="/pickleball/community" element={<div>Pickleball Community - Coming Soon</div>} />
            <Route path="/login" element={<div>Login - Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;