import React from 'react';
import '../styles/Navbar.css'
function Navbar() {
  return (
   
    <header className="app-navbar">
      

     <div className="navbar-brand">
  <a href="/" className="brand-link">
    <h1 className="brand-title">BELGARVIA</h1>
    <p className="brand-subtitle">Places That Feel Like Home</p>
  </a>
</div>

      

   <nav className="navbar-nav">
  <a href="#about-section" className="nav-link">About</a>
  <a href="#services-section" className="nav-link">Services</a>
  <a href="#projects-section" className="nav-link">Projects</a>
  <a href="#gallery-section" className="nav-link">Gallery</a>
  <a href="#reviews-section" className="nav-link">Reviews</a>
  <a href="#contact-section" className="nav-link">Contact</a>
</nav>

      
    </header>
  );
}

export default Navbar;