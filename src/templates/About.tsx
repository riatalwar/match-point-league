import React from 'react';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Match Point League</h1>
          <p>Building communities through tennis and pickleball</p>
        </div>
      </section>
      
      <section className="about-mpl">
        <div className="container">
          <div className="content-card">
            <h2>About MPL</h2>
            <p>
              Hello, my name is Ria, and I am the developer of the Match Point League (MPL) site. 
              This website is designed with the intention of bringing together players across Baltimore 
              to form a friendly (and competitive!) community. Please take your time to explore our 
              range of offerings for players of all backgrounds.
            </p>
          </div>
        </div>
      </section>

      <section className="meet-team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/src/assets/Ria_Headshot.jpg" alt="Marco" className="profile-image" />
              </div>
              <div className="member-info">
                <h3>🎾 Marco</h3>
                <p className="member-role">Founder & League Visionary</p>
                <p className="member-bio">
                  Born and raised in Italy, Marco was a skilled soccer player before moving to the U.S. at 21 — where tennis became his new passion. After years of playing and joining local leagues, he began dreaming of a smarter, more intuitive way for players to connect. When his tennis buddy Frank started playing pickleball and raving about it, the idea struck: why not build the first-ever platform for both tennis and pickleball matchmaking? And just like that, Match Point League was born.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <img src="/src/assets/Ria_Headshot.jpg" alt="Frank" className="profile-image" />
              </div>
              <div className="member-info">
                <h3>🧠 Frank</h3>
                <p className="member-role">Co-founder & Strategic Architect</p>
                <p className="member-bio">
                  With razor-sharp technical insight and a mind for structure, Frank was instrumental in shaping the platform behind the scenes. His early experience with pickleball planted the seed for a dual-sport concept, and his high-level input on the platform's technologies, flow, and features helped turn vision into reality. MPL's foundation is built on Frank's strategy.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <img src="/src/assets/Ria_Headshot.jpg" alt="Ria" className="profile-image" />
              </div>
              <div className="member-info">
                <h3>💻 Ria</h3>
                <p className="member-role">Lead Developer & UX Strategist</p>
                <p className="member-bio">
                  Ria brought the MPL platform to life with incredible skill and ease. A tech wizard fluent in the latest technologies, she tackled everything from matchmaking algorithms to game-day scheduling and responsive design. Her sharp UX instincts and flawless backend execution created the smooth, modern experience players love today.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <img src="/src/assets/Ria_Headshot.jpg" alt="Sherie" className="profile-image" />
              </div>
              <div className="member-info">
                <h3>📣 Sherie</h3>
                <p className="member-role">Marketing Director & Brand Voice</p>
                <p className="member-bio">
                  Sherie helped shape how MPL connects with the world. She guided the user interface with a sharp eye for clarity and cohesion, while building targeted outreach to bring the right players onto the platform. With her experience in digital marketing and community growth, Sherie made sure MPL didn't just launch — it landed strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-offerings">
        <div className="container">
          <div className="content-card">
            <h2>Our Offerings</h2>
            <p>
              MPL aims to be an inclusive environment for all players, so we offer matches according 
              to skill level (Beginner through Elite) and team preference (Singles, Doubles, Womens, 
              Mens, Coed). We also aim to make space for different levels of competitiveness, ranging 
              from casual to competitive. We play at courts across the Baltimore area, including ___, ___, and __. 
              We'll handle all the coordination–all you have to do is show up ready to play!
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          <div className="content-card">
            <h2>Contact Us</h2>
            <p>If you have any questions about the organization or website, please reach out to us!</p>
            
            <div className="contact-links">
              <a href="mailto:matchpointleague2025@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span>matchpointleague2025@gmail.com</span>
              </a>
              <a href="#" className="contact-link">
                <span className="contact-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="#" className="contact-link">
                <span className="contact-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" className="contact-link">
                <span className="contact-icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;