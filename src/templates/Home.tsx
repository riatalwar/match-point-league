import React, { useState } from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-background"></div>
      
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <div className="badge-center">
                  <span className="badge-icon">⚡</span>
                </div>
                <div className="badge-text">
                  <span>BALTIMORE'S • PREMIER • TENNIS • & • PICKLEBALL • </span>
                </div>
              </div>
              <h1 className="hero-title">
                Match 
                <span className="highlight-text">Point</span> 
                League
              </h1>
              <p className="hero-subtitle">
                Connect. Compete. Community. Experience the thrill of organized tennis and pickleball in Maryland's most welcoming sports league.
              </p>
              
              <div className="hero-action-text">
                <div className="action-text">Ready to play?</div>
                <button className="btn btn-primary btn-large hero-cta-btn">
                  🏆 Find a League
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="sport-cards">
                <div className={`sport-card tennis-card`}
                     onClick={() => navigate('/tennis')}>
                  <div className="card-icon">🎾</div>
                  <h3>Tennis</h3>
                  <p>Classic court competition with precision and power</p>
                  <div className="card-detail">Singles & Doubles</div>
                </div>
                
                <div className={`sport-card pickleball-card`}
                     onClick={() => navigate('/pickleball')}>
                  <div className="card-icon">🏓</div>
                  <h3>Pickleball</h3>
                  <p>Fast-paced fun that's easy to learn, challenging to master</p>
                  <div className="card-detail">All Skill Levels</div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        
        <section className="community-section">
          <div className="container">
            <div className="content-with-images right-content">
              <div className="images-area">
                <div className="player-image primary">
                  <img src="/src/assets/image-1.png" alt="Player in action" />
                </div>
                <div className="player-image secondary">
                  <img src="/src/assets/image-2.png" alt="Player in action" />
                </div>
              </div>
              <div className="content-area">
                <h2>Join Our Diverse Community</h2>
                <p>Connect with players of all skill levels across Baltimore. From casual matches to competitive tournaments, find your perfect playing partners in our welcoming community.</p>
                <div className="stats-mini">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Active Players</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Weekly Matches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="content-with-images left-content">
              <div className="content-area">
                <h2>Why Choose Match Point League?</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <div>
                      <h3>Skill-Based Matching</h3>
                      <p>Play with others at your level, from beginner to elite competition</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🏆</div>
                    <div>
                      <h3>Organized Leagues</h3>
                      <p>Join seasonal leagues with structured play and championship tournaments</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🌟</div>
                    <div>
                      <h3>Community Focused</h3>
                      <p>Build lasting friendships through our welcoming player community</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="images-area">
                <div className="player-image primary">
                  <img src="/src/assets/image-3.png" alt="Player in action" />
                </div>
                <div className="player-image secondary">
                  <img src="/src/assets/image-4.png" alt="Player in action" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join hundreds of players who have made Match Point League their home court!</p>
              <button className="btn btn-primary btn-large">
                ➕ Join the League Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;