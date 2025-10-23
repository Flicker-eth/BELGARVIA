import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="app-navbar">
      <div className="navbar-brand">
        <a href="/" className="brand-link">
          <h1 className="brand-title">BELGARVIA</h1>
          <p className="brand-subtitle">Places That Feel Like Home</p>
        </a>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <nav className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#about-section" className="nav-link" onClick={toggleMenu}>
          About
        </a>
        <a href="#services-section" className="nav-link" onClick={toggleMenu}>
          Services
        </a>
        <a href="#projects-section" className="nav-link" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#gallery-section" className="nav-link" onClick={toggleMenu}>
          Gallery
        </a>
        <a href="#reviews-section" className="nav-link" onClick={toggleMenu}>
          Reviews
        </a>
        <a href="#contact-section" className="nav-link" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
