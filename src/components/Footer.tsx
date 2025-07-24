import React from 'react';
import '../styles/footer.css';
import { Instagram, Facebook, Twitter, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Match Point League</h3>
            <p>Your home for Baltimore tennis and pickleball leagues.</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="mailto:matchpointleague2025@gmail.com" className="footer-email">
                <Email /> matchpointleague2025@gmail.com
              </a>
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Match Point League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;