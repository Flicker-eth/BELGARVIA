import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Gallery</li>
            <li>Reviews</li>
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
            <li>hi@woodland.com</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Your email address" />
          <button>SUBMIT</button>
        </div>
      </div>

         <div className="footer-copy">
        <p>
          © {new Date().getFullYear()} BELGARVIA. All rights reserved. {" "}
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
