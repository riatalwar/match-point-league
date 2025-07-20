import React from 'react';
import '../styles/home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Match Point League</h1>
          <p>Join the premier tennis and pickleball league in the Baltimore area</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Join Tennis League</button>
            <button className="btn btn-secondary">Join Pickleball League</button>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Match Point League?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Competitive Play</h3>
              <p>Experience thrilling matches with players of similar skill levels</p>
            </div>
            <div className="feature-card">
              <h3>Community</h3>
              <p>Connect with fellow tennis and pickleball enthusiasts</p>
            </div>
            <div className="feature-card">
              <h3>Tournaments</h3>
              <p>Participate in regular tournaments and events</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join an enthusiastic community of players who have made Match Point League their home!</p>
          <button className="btn btn-primary btn-large">Sign Up Today</button>
        </div>
      </section>
    </div>
  );
};

export default Home;