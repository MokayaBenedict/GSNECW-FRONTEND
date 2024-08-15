import React from 'react';
import './footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/src/assets/icon.jpg" alt="Your Logo" />
      </div>
      <div className="footer-about">
        <h1>About Us</h1>
        <h2>Discover top-quality skating gear and apparel at our club shop. Whether you're a beginner or pro, we have everything you need to skate with confidence, style, and passion. Join our community!</h2>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> 
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
