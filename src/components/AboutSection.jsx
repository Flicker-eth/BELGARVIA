// src/components/AboutSection.jsx

import React from 'react';
import '../styles/AboutSection.css'; // Import the dedicated CSS

function AboutSection() {
  return (
    <section id="about-section" className="section-about top-padding-0px">
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-blocks-wrapper w-layout-grid 2x1-grid">
          
          {/* Left Column: About Heading */}
          <h2 className="about-title">About</h2>
          
          {/* Right Column: Two Paragraph Blocks */}
        <div className="about-content-blocks">

  <div className="about-block">
    <p>
      AT <strong>BELGARVIA</strong>, WE BELIEVE THAT EVERY SPACE TELLS A STORY — 
      A STORY OF COMFORT, ELEGANCE, AND INDIVIDUALITY. 
      WE ARE A NEW-AGE BRAND THAT REDEFINES HOW PEOPLE EXPERIENCE LUXURY LIVING, 
      FROM BREATHTAKING RESORTS AND BOUTIQUE HOTELS TO THE ARTFUL CREATION OF YOUR DREAM HOME. <br /><br />
      OUR VISION IS SIMPLE YET POWERFUL TO BUILD AND DESIGN SPACES THAT FEEL LIKE HOME.
  
    </p>
  </div>

  <div className="about-block">
    <p>
      WE ARE A COLLECTIVE OF PASSIONATE ARCHITECTS, INTERIOR DESIGNERS, PROJECT MANAGERS, 
      AND CREATIVE VISIONARIES COMMITTED TO TRANSFORMING IMAGINATION INTO REALITY. <br /><br />
FROM SERENE RETREATS TO DREAM HOMES, WE COMBINE DESIGN AND CRAFTSMANSHIP TO BRING YOUR VISION TO LIFE.
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;