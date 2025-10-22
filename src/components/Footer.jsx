import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-column">
         <h4>Quick Links</h4>
<ul>
  <li><a href="#about-section">About</a></li>
  <li><a href="#services-section">Services</a></li>
  <li><a href="#projects-section">Projects</a></li>
  <li><a href="#gallery-section">Gallery</a></li>
  <li><a href="#reviews-section">Reviews</a></li>
</ul>

        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Style guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>hi@belgarvia.com</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Example@mail.com" />
          <button>SUBMIT</button>
        </div>
      </div>

       <div className="footer-copy">
  <p>
    © {new Date().getFullYear()} <span className="footer-brand">BELGARVIA</span>. All rights reserved.{" "}
    <a
      href="https://github.com/Flicker-eth"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </p>
</div>

    </footer>
  );
};

export default Footer;
