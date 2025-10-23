import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Gallery.css";

import img1 from "../assets/gallery1.webp";
import img2 from "../assets/gallery2.webp";
import img3 from "../assets/gallery3.webp";
import img4 from "../assets/gallery4.webp";
import img5 from "../assets/gallery5.webp";

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const galleryRef = useRef(null);

  // Track scroll progress **relative to the gallery section**
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    // start when top of section hits top of viewport, end when bottom of section hits bottom
    offset: ["start start", "end end"],
  });
  const isMobile = window.innerWidth < 768;
  // Header: keep visible, then fade out slightly near the end of the pinned phase
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.35],
    [1, 1, 0]
  );
  const headerScale = useTransform(scrollYProgress, [0, 0.18], [1, 1]); // keep it stable

  // A base rise for the whole container (subtle)
  const containerY = useTransform(scrollYProgress, [0.12, 0.5], [200, 0]);
  const containerScale = useTransform(scrollYProgress, [0.12, 0.6], [0.95, 1]);
  const finalPositions = [
    { x: -100, y: 30 }, // left top
    { x: 200, y: -100 }, // left bottom
    { x: 205, y: -225 }, // center
    { x: 150, y: 180 }, // right top
    { x: 320, y: -100 }, // right bottom
  ];

  const imageTransforms = images.map((_, i) => {
    if (isMobile) {
      // On mobile: stack images vertically with no transform
      return { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 };
    }
    // initial positions based on simple scatter directions
    const direction = i % 4; // 0=left,1=right,2=top,3=bottom
    const startX = direction === 0 ? -400 : direction === 1 ? 400 : 0;
    const startY = direction === 2 ? -300 : direction === 3 ? 300 : 0;

    // final positions for layout
    const final = finalPositions[i % finalPositions.length];

    const x = useTransform(scrollYProgress, [0.1, 0.6], [startX, final.x]);
    const y = useTransform(scrollYProgress, [0.1, 0.6], [startY, final.y]);
    const scale = useTransform(scrollYProgress, [0.4, 0.9], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);

    return { x, y, scale, opacity, rotate: 0 };
  });

  return (
    <section className="gallery-section" ref={galleryRef} id="gallery-section">
      {/* Sticky header — CSS handles pinning */}
      <motion.div
        className="gallery-header"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <p className="small">AS FEATURED IN</p>
        <h1>GALLERY</h1>
      </motion.div>

      {/* Container that will slowly lift the whole collage as you scroll */}
      <motion.div
        className="gallery-container"
        style={{ y: containerY, scale: containerScale }}
      >
        {images.map((src, index) => {
          const t = imageTransforms[index];
          return (
            <motion.div
              key={index}
              className={`gallery-item item-${index + 1}`}
              style={{
                y: t.y,
                x: t.x,
                opacity: t.opacity,
                rotate: t.rotate,
                scale: t.scale,
              }}
            >
              <img src={src} alt={`Gallery ${index + 1}`} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Gallery;
