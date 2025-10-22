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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
