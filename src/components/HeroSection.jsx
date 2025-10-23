import React, { useState, useEffect } from "react";
import heroSkyImage from "../assets/heroBGSky.webp";
import heroForegroundImage from "../assets/heroBG.webp";
import "../styles/HeroSection.css";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  const FIX_POSITION = 400;
  const HERO_SECTION_HEIGHT = 400;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = { backgroundImage: `url(${heroSkyImage})` };
  const foregroundStyle = { backgroundImage: `url(${heroForegroundImage})` };

  const isTextFixed = scrollY >= FIX_POSITION;

  // Fade out gradually after hero section height
  const opacity =
    scrollY > HERO_SECTION_HEIGHT ? 0 : 1 - scrollY / HERO_SECTION_HEIGHT;

  // Disable parallax transform once fixed
  const titleStyle = {
    transform: !isTextFixed
      ? `translateY(${-scrollY * 0.5}px)`
      : "translate(-50%, -50%)",
    opacity,
  };

  return (
    <section id="hero-section" className="hero-section-belgarviaa">
      <div className="hero-images-wrapper">
        {/* CRITICAL: ADD THIS ELEMENT HERE */}
        <div className="curtain-overlay top-half"></div>
        <div className="curtain-overlay bottom-half"></div>

        <div className="hero-image-background" style={backgroundStyle} />

        {/* <div className={`page-title ${isTextFixed ? 'is-fixed' : ''}`} style={titleStyle}>
            BELGARVIA
        </div> */}

        <div
          className={`page-title ${isTextFixed ? "is-fixed" : ""}`}
          style={titleStyle}
        >
          {"BELGARVIA".split("").map((char, index, arr) => {
            const mid = Math.floor(arr.length / 2);
            const distanceFromCenter = Math.abs(index - mid);
            const delay = distanceFromCenter * 0.1; // 0.1s per letter from center

            return (
              <span
                key={index}
                className="letter-animate"
                style={{ animationDelay: `${delay}s` }}
              >
                {char}
              </span>
            );
          })}
        </div>

        <div className="hero-image-foreground" style={foregroundStyle} />
        <div className="animated-overlay-blocks" />
      </div>
    </section>
  );
}

export default HeroSection;
