import React from "react";
import "./css/portfolio.css";
import "./css/portfolioGrid.css";
import portfolio from "../assets/portfolio1.png";
import { projects } from "../data/projects";
import { ChevronRight } from "lucide-react";

const Portfolio = () => {
  return (
    <>
      {/* ===== HEADER SECTION ===== */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          {/* Left Image */}
          <div className="portfolio-img animate-left">
            <img src={portfolio} alt="portfolio" />
          </div>

          {/* Right Text */}
          <div className="portfolio-text animate-right">
            <h2 className="font-montserrat text-black">portfolio.</h2>
            <h3 className="font-montserrat">
              Check out some of my latest work.
            </h3>
            <p className="font-poppins">
              As a full-stack developer, I build and manage websites for
              various projects.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="pg-section">
        <div className="pg-wrapper">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-card"
            >
              {/* Thumbnail */}
              <div className="pg-thumb">
                <img src={project.image} alt={project.title} />
                <span className="pg-badge font-poppins">
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="pg-body">
                <h3 className="pg-title font-montserrat">{project.title}</h3>
                <span className="pg-link font-poppins">
                  Visit Project
                  <ChevronRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;