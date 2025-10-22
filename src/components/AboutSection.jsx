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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla."
              </p>
            </div>
            <div className="about-block">
              <p>
                "Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;