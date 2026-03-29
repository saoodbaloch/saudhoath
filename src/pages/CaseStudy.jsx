import React from "react";
import "./css/portfolio.css";
import caseStudy from "../assets/studycase14.gif";
import { backendProjects } from "../data/backendProjects";
import { Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
    return (
        <>
            {/* ===== HEADER / ABOUT SECTION ===== */}
            <section className="portfolio-section">
                <div className="portfolio-container">
                    {/* Left Image */}
                    <div className="portfolio-img animate-left">
                        <img
                            src={caseStudy}
                            alt="portfolio"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="portfolio-text animate-right">
                        <h2 className="font-montserrat text-black">case study.</h2>
                        <h3 className="font-montserrat">
                            Explore some of my latest backend integrated projects.
                        </h3>
                        <p className="font-poppins">
                            I develop full-stack applications with complete backend logic,
                            integrating databases and APIs for real-world use cases.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS GRID ===== */}
            <section className="relative projects-section w-full py-20 px-6 overflow-hidden">
                <div className="projects-grid-container">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 projects-grid">
                        {backendProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* ===== IMAGE FULL CONTAINER ===== */}
                                <div className="overflow-hidden rounded-t-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 sm:h-56 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* ===== CONTENT ===== */}
                                <div className="p-6">
                                    <h3 className="font-montserrat text-lg text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">
                                        {project.category}
                                    </p>

                                    {/* ===== BUTTONS ===== */}
                                    <div className="mt-6 flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-poppins border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                                        >
                                            <Github size={16} />
                                            Repository
                                        </a>

                                        <Link
                                            to={project.caseStudy}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-poppins bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                                        >
                                            <FileText size={16} />
                                            Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudy;
