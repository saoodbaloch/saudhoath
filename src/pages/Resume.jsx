import React from "react";
import "./css/resume.css";
import diplomaThumbnail from "../assets/diploma-thumbnail.png";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="rp-page">

      {/* ── About ── */}
      <section className="rp-card">
        <ResumeSection title="about">
          <p className="rp-para font-poppins">
            I am <strong>Saud</strong>, a backend-focused web developer
            specializing in building secure, scalable, and database-driven
            applications.
            <br /><br />
            I primarily work with <strong>Laravel (PHP)</strong>,{" "}
            <strong>MySQL</strong>, and <strong>RESTful APIs</strong> to develop
            clean backend architectures, handle business logic, and manage
            efficient data flow between systems.
            <br /><br />
            I hold a{" "}
            <strong>2-year Higher Diploma in Software Engineering (PRO)</strong>{" "}
            from <strong>Aptech Garden Karachi</strong> and have hands-on
            experience developing real-world web applications.
          </p>
        </ResumeSection>

        {/* ── Education ── */}
        <ResumeSection title="education">
          <ul className="rp-list font-poppins">
            <li>
              <span className="rp-year">2021 – 2023</span>
              Higher Diploma in Software Engineering (PRO) — Aptech Garden
              Center, Karachi
            </li>
            <li>
              <span className="rp-year">2019 – 2021</span>
              Intermediate (Computer Science)
            </li>
          </ul>
        </ResumeSection>

        {/* ── Diploma ── */}
        <ResumeSection title="diploma">
          <div className="rp-diploma font-poppins">
            <img
              src={diplomaThumbnail}
              alt="Diploma Preview"
              className="rp-diploma-img"
            />
            <a
              href="/Saud-Diploma.pdf"
              download
              className="rp-download-btn font-montserrat"
            >
              <FaFileDownload size={15} />
              Download Diploma
            </a>
          </div>
        </ResumeSection>
      </section>

      {/* ── Contact ── */}
      <section className="rp-card">
        <ResumeSection title="contact">
          <div className="rp-contact font-poppins">
            <div className="rp-contact-item">
              <span className="rp-contact-icon">
                <FiPhone size={17} />
              </span>
              <div>
                <span className="rp-contact-label">Phone</span>
                <span className="rp-contact-value">+92 0307-2264628</span>
              </div>
            </div>
            <div className="rp-contact-item">
              <span className="rp-contact-icon">
                <FiMail size={17} />
              </span>
              <div>
                <span className="rp-contact-label">Email</span>
                <a
                  href="mailto:balochsaood88@gmail.com"
                  className="rp-contact-value rp-contact-link"
                >
                  balochsaood88@gmail.com
                </a>
              </div>
            </div>
            <div className="rp-contact-item">
              <span className="rp-contact-icon">
                <FiMapPin size={17} />
              </span>
              <div>
                <span className="rp-contact-label">Address</span>
                <span className="rp-contact-value">Lyari, Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </ResumeSection>
      </section>

    </div>
  );
};

/* ── Section Component ── */
const ResumeSection = ({ title, children }) => (
  <div className="rp-section">
    {title && (
      <h2 className="rp-section-title font-montserrat">{title}.</h2>
    )}
    {children}
  </div>
);

export default ResumePage;