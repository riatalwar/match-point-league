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
      
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>About Us</h2>
              <p>
              Hello, my name is Ria, and I am the developer of the Match Point League (MPL) site. 
              This website is designed with the intention of bringing together players across Baltimore 
              to form a friendly (and competitive!) community. Please take your time to explore our 
              range of offerings for players of all backgrounds.

              </p>
            </div>
            
            <div className="content-section">
              <h2>Our Team</h2>
              Information about all contributors to the MPL organization
            </div>
            
            <div className="content-section">
              <h2>Our Offerings</h2>
              <p>
              MPL aims to be an inclusive environment for all players, so we offer matches according 
              to skill level (Beginner through Elite) and team preference (Singles, Doubles, Womens, 
              Mens, Coed). We also aim to make space for different levels of competitiveness, ranging 
              from casual to competitive. We play at courts across the Baltimore area, including ___, ___, and __.
We’ll handle all the coordination–all you have to do is show up ready to play!

              </p>
            </div>
            
            <div className="content-section">
              <h2>Contact Us</h2>
              <p>
              If you have any questions about the organization or website, please reach out to us at 
              matchpointleague2025@gmail.com! You can also find us on social media at [links].
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;