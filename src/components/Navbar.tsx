import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mplLogo from '../assets/MPL_Logo.png';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [tennisDropdown, setTennisDropdown] = useState(false);
  const [pickleballDropdown, setPickleballDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={mplLogo} alt="Match Point League" className="navbar-logo-img" />
          <span>Match Point League</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          
          <Link to="/about" className="navbar-link">
            About
          </Link>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setTennisDropdown(true)}
            onMouseLeave={() => setTennisDropdown(false)}
          >
            <span className="navbar-link">Tennis</span>
            {tennisDropdown && (
              <div className="dropdown-menu">
                <Link to="/tennis/tournaments" className="dropdown-link">
                  Tournaments
                </Link>
                <Link to="/tennis/community" className="dropdown-link">
                  Community
                </Link>
              </div>
            )}
          </div>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setPickleballDropdown(true)}
            onMouseLeave={() => setPickleballDropdown(false)}
          >
            <span className="navbar-link">Pickleball</span>
            {pickleballDropdown && (
              <div className="dropdown-menu">
                <Link to="/pickleball/tournaments" className="dropdown-link">
                  Tournaments
                </Link>
                <Link to="/pickleball/community" className="dropdown-link">
                  Community
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/login" className="navbar-cta">
            Login
          </Link>
        </div>
        
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;