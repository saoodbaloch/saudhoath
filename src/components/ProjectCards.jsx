import React from "react";
import kidstv from "../assets/kidstv.png";
import doctorbilling from "../assets/doctorbilling.png";
import ebook4 from "../assets/ebook4.png";
import { ChevronRight } from "lucide-react";
import "./projectCards.css";

const projects = [
  {
    title: "Animation Kids Website",
    category: "Kids Channel Website",
    image: kidstv,
    link: "https://kids-tv.hstn.me/",
  },
  {
    title: "Medical Billing Website",
    category: "Healthcare",
    image: doctorbilling,
    link: "https://www.doctorbillingservices.com/",
  },
  {
    title: "E-Book Store Website",
    category: "Online Bookstore",
    image: ebook4,
    link: "https://e-book.zya.me/",
  },
];

export default function Projects() {
  return (
    <section className="pc-section">
      <div className="pc-wrapper">

        {/* ── Heading ── */}
        <div className="pc-heading">
          <span className="pc-heading-line" />
          <h2 className="pc-heading-text font-montserrat">
            Some of my latest work
          </h2>
          <span className="pc-heading-line" />
        </div>

        {/* ── Cards ── */}
        <div className="pc-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-card"
            >
              {/* Thumbnail */}
              <div className="pc-thumb">
                <img src={project.image} alt={project.title} />
                <span className="pc-badge font-poppins">
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="pc-body">
                <h3 className="pc-title font-montserrat">{project.title}</h3>
                <span className="pc-link font-poppins">
                  Visit Site
                  <ChevronRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}