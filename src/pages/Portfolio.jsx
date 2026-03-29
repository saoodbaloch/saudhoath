import React from "react";
import "./css/portfolio.css";
import portfolio from "../assets/portfolio1.png";  
import { projects } from "../data/projects";
import { backendProjects} from "../data/backendProjects";
import { ChevronRight } from "lucide-react";
const Portfolio = () => {
  return (
    <>
      {/* About Section */}
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
    Check out my some latest work.
  </h3>
  <p className="font-poppins">
   As a full-stack developer,I build and manage websites for various projects
  </p>
</div>
        </div>
      </section>
       {/* Projects Section */}
      <section className="relative projects-section w-full  py-20 px-6 overflow-hidden">
        <div className="projects-grid-container">
  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 projects-grid">
    {projects.map((project, index) => (
      <a
        key={index}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="p-2 bg-gray-100 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-montserrat text-lg text-gray-800">
              {project.title}
            </h3>
            <ChevronRight
              size={40}
              className="project-arrow text-gray-100 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
            />
          </div>
          <p className="font-poppins text-sm text-gray-600 mt-2">
            {project.category}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>
      </section> 
    </>
  );
};

export default Portfolio;
