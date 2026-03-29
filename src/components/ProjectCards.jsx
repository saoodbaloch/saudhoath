import React from "react";
import kidstv from "../assets/kidstv.png";
import doctorbilling from "../assets/doctorbilling.png";
import ebook4 from "../assets/ebook4.png";
import { ChevronUp, ChevronRight } from "lucide-react";
import "./projectCards.css"

const projects = [
  {
    title: "Animation Kids Website",
    category: "Kids Channel Website",
    image: kidstv,
    link: "https://kidstv.free.nf/",
  },
  {
    title: "Medical Billing Website",
    category: "Healthcare",
    image: doctorbilling,
    link: " https://www.doctorbillingservices.com/",
  },
  {
    title: "E-Book Store Website",
    category: "Online Bookstore",
    image: ebook4,
    link: "https://ebook2.lovestoblog.com/",
  },
];

export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Section part */}
      <section
        className="relative projects-cards-section w-full py-20 px-6 overflow-hidden 
        shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl"
      >
        <div className="max-w-6xl mx-auto">
        <h2 className="relative font-montserrat flex items-center justify-center 
  text-gray-700 uppercase tracking-wider 
  text-base sm:text-lg md:text-xl   /* 🔹 font aur chota */
  mb-6 sm:mb-10 
  bg-transparent py-1 sm:py-2 px-3 sm:px-4 text-center whitespace-nowrap">
        <span className="flex-grow h-px bg-gray-300"></span>
        <span className="relative z-10 px-4 ">Some of my latest work</span>
        <span className="flex-grow h-px bg-gray-300"></span>
        </h2>


          {/* Project cards */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl 
                shadow-lg hover:shadow-2xl 
                transition-shadow duration-300"
              >
                {/* Image Frame */}
                <div className="p-2 bg-gray-100 rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-xl 
                    group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montserrat text-lg  text-gray-800">
                      {project.title}
                    </h3>
                    <ChevronRight
                      size={40}
                      className="project-arrow text-gray-100 opacity-0 transition-all duration-300 ease-out"
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
}