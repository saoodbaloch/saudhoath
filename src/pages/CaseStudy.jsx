import React from "react";
import "./css/portfolio.css";
import "./css/caseStudy.css";
import caseStudy from "../assets/studycase14.gif";
import { backendProjects } from "../data/backendProjects";
import { Github, FileText, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
    return (
        <>
            {/* ===== HEADER SECTION ===== */}
            <section className="portfolio-section">
                <div className="portfolio-container">
                    <div className="portfolio-img animate-left">
                        <img
                            src={caseStudy}
                            alt="portfolio"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
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

            {/* ===== PROJECTS SECTION ===== */}
            <section className="cs-section">
                <div className="cs-wrapper">
                    {backendProjects.map((project, index) => (
                        <div key={index} className="cs-card">

                            {/* ── Thumbnail ── */}
                            <div className="cs-thumb">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                                <span className="cs-badge font-poppins">
                                    {project.category}
                                </span>
                            </div>

                            {/* ── Info ── */}
                            <div className="cs-body">
                                <h3 className="cs-title font-montserrat">
                                    {project.title}
                                </h3>
                                <div className="cs-actions">
                                    <Link
                                        to={project.caseStudy}
                                        className="cs-btn-dark font-poppins"
                                    >
                                        <FileText size={15} />
                                        Case Study
                                        <ArrowUpRight size={13} />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CaseStudy;