import React, { useEffect, useRef, useState } from "react";
import "../styles/ClientsSection.css";
import hgtvLogo from "../assets/hgtvc3.svg";
import expRealtyLogo from "../assets/expC2.svg";
import fortuneMagazineLogo from "../assets/fortuneC1.svg";

// --- CountingStat Component ---
function CountingStat({ endValue, label, duration = 2000 }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const numericEndValue = parseInt(endValue.replace(/\D/g, ""), 10);
  const suffix = endValue.replace(/\d/g, "");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCurrentValue(Math.floor(percentage * numericEndValue));
            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              setCurrentValue(numericEndValue);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [numericEndValue, duration]);

  return (
    <div className="stat-item" ref={ref}>
      <p className="stat-number">
        {currentValue}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

// --- Main ClientsSection Data ---
const stats = [
  { id: 1, endValue: "316+", label: "projects completed" },
  { id: 2, endValue: "740+", label: "satisfied customers" },
  { id: 3, endValue: "215+", label: "YTD transactions" },
];

const featuredLogos = [
  { id: 1, name: "HGTV", src: hgtvLogo, alt: "HGTV Logo" },
  { id: 2, name: "EXP REALTY", src: expRealtyLogo, alt: "EXP REALTY Logo" },
  {
    id: 3,
    name: "FORTUNE MAGAZINE",
    src: fortuneMagazineLogo,
    alt: "FORTUNE MAGAZINE Logo",
  },
];

function ClientsSection() {
  // --- NEW: Refs for logo animation ---
  const logoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("logo-animate-active");
            // Optional: Unobserve after animation to run only once
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the logo is visible
    );

    logoRefs.current.forEach((el) => el && observer.observe(el));
    return () => logoRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="clients-section" id="clients-section">
      <div className="clients-content-wrapper">
        <div className="stats-container">
          <h4 className="stats-heading">BY THE NUMBERS</h4>
          <div className="stats-grid">
            {stats.map((stat) => (
              <CountingStat
                key={stat.id}
                endValue={stat.endValue}
                label={stat.label}
                duration={2500}
              />
            ))}
          </div>
        </div>

        <div className="featured-container">
          <h4 className="featured-heading">AS FEATURED IN</h4>
          <div className="logos-wrapper">
            {featuredLogos.map(
              (
                logo,
                index // Add index for ref
              ) => (
                <div
                  key={logo.id}
                  ref={(el) => (logoRefs.current[index] = el)} // Attach ref
                  className="logo-item"
                >
                  <img src={logo.src} alt={logo.alt} className="client-logo" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
