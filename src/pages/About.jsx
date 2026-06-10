import React from "react";
import "./css/about.css";
import cleanFace from "../assets/saudhalfpaint1.png";
import geospeak from "../assets/geospeak.png";
import SkillsPie from "../components/SkillsPie";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">
        <div className="about-container">

          {/* Right Image */}
          <div className="about-img animate-left">
            <img src={cleanFace} alt="About Me" />
          </div>

          {/* Left Text */}
          <div className="about-text animate-right">
            <h2 className="font-montserrat">about.</h2>
            <h3 className="font-montserrat">
              Full Stack Developer with 2 years of experience building
              scalable web applications.
            </h3>
            <p className="font-poppins">
              Experienced in developing backend systems using{" "}
              <strong>Laravel</strong> and <strong>MySQL</strong>, and building
              efficient <strong>REST APIs</strong>. On the frontend, I work
              with <strong>React.js</strong> and <strong>Tailwind CSS</strong>{" "}
              to deliver clean, performant user interfaces.
            </p>
          </div>

        </div>
        <div className="section-divider" />
      </section>

      {/* ===== SKILLS ===== */}
      <SkillsPie />

      {/* ===== PROJECT SECTION ===== */}
      <section className="about-project-section">
        <div className="about-project-container">

          {/* Image */}
          <div className="about-project-img animate-right">
            <img src={geospeak} alt="GeoSpeak Project" />
          </div>

          {/* Text */}
          <div className="about-project-text animate-left">
            <h2 className="font-montserrat">project.</h2>
            <h3 className="font-montserrat">
              GeoSpeak – Python-Based Team Project
            </h3>
            <p className="font-poppins">
              GeoSpeak was a team-based project developed during{" "}
              <strong>Techwiz 5</strong>. The objective was to design and
              deliver a functional application within a strict deadline.
              <br /><br />
              Despite Python not being my primary stack, I contributed by
              quickly adapting to the technology, studying documentation, and
              collaborating effectively with the team to deliver a working
              solution within <strong>4 days</strong>. The project strengthened
              my problem-solving skills and ability to work efficiently under
              pressure.
            </p>

            {/* Buttons */}
            <div className="about-project-btns">
              <Link
                to="/case-study/geospeak-ai"
                className="about-btn-solid font-poppins"
              >
                <FileText size={15} />
                Case Study
              </Link>
              <a
                href="https://github.com/saoodbaloch/GeoSpeak.git"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-outline font-poppins"
              >
                <FaCode size={14} />
                Source Code
              </a>
            </div>
          </div>

        </div>
        <div className="section-divider" />
      </section>
    </>
  );
};

export default About;