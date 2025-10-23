import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import villa1 from "../assets/villa1.jpeg";
import villa2 from "../assets/villa2.jpeg";
import villa3 from "../assets/villa3.webp";

const projects = [
  {
    id: 1,
    title: "Coastal Villa",
    location: "Aspen",
    type: "Residential",
    year: "2024",
    description:
      "A stunning contemporary villa designed for modern living, boasting clean lines, expansive glass, and seamless indoor-outdoor flow. Located in Aspen, this residence offers luxury and comfort with breathtaking views.",
    image: villa1,
    direction: "left",
  },
  {
    id: 2,
    title: "The Willow Loft",
    location: "Aspen",
    type: "Residential",
    year: "2024",
    description:
      "Nestled amidst lush greenery, The Willow Loft offers a serene retreat with an open-plan design and large sliding glass doors that invite nature in. This residential project in Aspen blends modern aesthetics with a tranquil environment.",
    image: villa2,
    direction: "right",
  },
  {
    id: 3,
    title: "Sunshine Retreat",
    location: "Aspen",
    type: "Residential",
    year: "2024",
    description:
      "The Sunshine Retreat is a radiant architectural marvel featuring vast glass walls that maximize natural light and offer panoramic views of the surrounding landscape. This Aspen residence is a harmonious blend of sleek design and natural beauty.",
    image: villa3,
    direction: "left",
  },
];

const Projects = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("unfold-active");
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => refs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="projects-section" id="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (refs.current[index] = el)}
          className={`project-card unfold-${project.direction} ${
            (index + 1) % 2 === 0 ? "centered-card" : ""
          }`}
        >
          <div
            className="project-image"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p className="meta">
              {project.location} • {project.type} • {project.year}
            </p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
