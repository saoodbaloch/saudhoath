import React from "react";
import "./css/about.css";
import cleanFace from "../assets/saudhalfpaint1.png";
import geospeak from "../assets/geospeak.png";
import SkillsPie from "../components/SkillsPie";
import { FaRocket, FaCode, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-img animate-left">
            <img src={cleanFace} alt="About Me" />
          </div>

          {/* Right Text */}
          <div className="about-text animate-right">
            <h2 className="font-montserrat text-black">about.</h2>

            <h3 className="font-montserrat">
              Full Stack Developer with 2 years of experience building scalable web applications.
            </h3>

            <p className="font-poppins text-black">
              Experienced in developing backend systems using <span className="font-semibold">Laravel</span> and <span className="font-semibold">MySQL</span>, and building efficient <span className="font-semibold">REST APIs</span>.
              On the frontend, I work with <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span> to deliver clean, performant user interfaces.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="section-divider"></div>
      </section>

      {/* SkillPie Section */}
      <SkillsPie />

      {/* Project Section */}
      <section className="project-section">
        <div className="project-container">
          {/* Project Image */}
          <div className="project-img animate-right">
            <img src={geospeak} alt="GeoSpeak Project" />
          </div>

          {/* Project Text */}
          <div className="project-text animate-left">
            <h2 className="font-montserrat text-black">project.</h2>

            <h3 className="font-montserrat">
              GeoSpeak – Python-Based Team Project
            </h3>

            <p className="font-poppins text-black">
              GeoSpeak was a team-based project developed during{" "}
              <span className="font-semibold">Techwiz 5</span>. The objective was
              to design and deliver a functional application within a strict
              deadline.
              <br /><br />
              Despite Python not being my primary stack, I contributed by
              quickly adapting to the technology, studying documentation, and
              collaborating effectively with the team to deliver a working
              solution within <span className="font-semibold">4 days</span>.
              The project strengthened my problem-solving skills and ability to
              work efficiently under pressure.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/case-study/geospeak-ai"
                className="btn-demo flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap"
              >
                <FileText size={16} /> Case Study
              </Link>
              <a
                href="https://github.com/saoodbaloch/GeoSpeak.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap"
              >
                <FaCode className="inline-block mr-2" /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default About;
