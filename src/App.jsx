

import React from 'react';
import './App.css'; 
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import Projects from './components/Projects.jsx';
import ClientsSection from './components/ClientsSection.jsx';
import Gallery from './components/Gallery.jsx';
import ReviewPartner from './components/ReviewPartner.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
     <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <Projects />
    <ClientsSection />
    <Gallery />
    <ReviewPartner />
    <Footer />
    </>
  );
}

export default App;