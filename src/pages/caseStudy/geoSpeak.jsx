import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import "./GeoSpeakCaseStudy.css";

import flow from "../../assets/geoSpeakFlowDiagram.png";
import history from "../../assets/historyview.png";
import translateInterface from "../../assets/translationInterface.png";
import postman from "../../assets/postManGeo.png";
import db from "../../assets/databaseStructure.png";

const GeoSpeakCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="gs-page">
      <article className="gs-container">

        {/* ── Back Button ── */}
        <button onClick={() => navigate(-1)} className="gs-back font-poppins">
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>

        {/* ── Hero ── */}
        <div className="gs-hero">
          <span className="gs-hero-tag font-poppins">Case Study</span>
          <h1 className="gs-hero-title font-montserrat">
            GeoSpeak – Language Translation Platform
          </h1>
          <p className="gs-hero-sub font-poppins">
            API-driven multilingual translation system with dictionary
            integration and persistent translation history.
          </p>
        </div>

        {/* ── Project Overview ── */}
        <Section title="Project Overview">
          GeoSpeak is a web-based language translation application built with{" "}
          <strong>Flask</strong> and <strong>SQLAlchemy</strong>. It integrates
          professional third-party APIs to translate text, fetch word
          definitions, and store translation history.
          <br /><br />
          The project focuses on backend integration, clean API flow, and
          persistent data handling — not UI complexity.
        </Section>

        <ImageBlock label="System Flow (Frontend → Flask → APIs → Database)" src={flow} />

        {/* ── Problem ── */}
        <Section title="Problem Statement">
          Language learners and professionals often rely on multiple tools:
          <ul className="gs-list">
            <li>One app for translation</li>
            <li>Another for word meanings</li>
            <li>No centralized history</li>
          </ul>
          <br />
          This fragmented workflow reduces efficiency and learning continuity.
        </Section>

        {/* ── Solution ── */}
        <Section title="Solution">
          GeoSpeak unifies translation, definition lookup, and history tracking
          into a single application.
          <br /><br />
          Core objectives:
          <ul className="gs-list">
            <li>Accurate multilingual translation</li>
            <li>Contextual understanding via dictionary</li>
            <li>Persistent translation records</li>
          </ul>
        </Section>

        {/* ── Architecture ── */}
        <Section title="System Architecture">
          <pre className="gs-pre font-poppins">
{`Frontend (HTML / JS)
        ↓
Flask Backend
        ↓
DeepL Translation API
Dictionary API
        ↓
SQLite Database`}
          </pre>
        </Section>

        {/* ── Translation Engine ── */}
        <Section title="Translation Engine">
          <ul className="gs-list">
            <li>Uses <strong>DeepL API</strong> for high-quality translations</li>
            <li>Supports multiple source &amp; target languages</li>
            <li>Language swap handled client-side</li>
          </ul>
        </Section>

        <ImageBlock label="Translation Interface" src={translateInterface} />

        {/* ── Dictionary ── */}
        <Section title="Dictionary Integration">
          After translation, GeoSpeak fetches word definitions using a
          dictionary API to help users understand meaning and context instead
          of raw text output.
        </Section>

        {/* ── History ── */}
        <Section title="Translation History">
          Every translation is stored with:
          <ul className="gs-list">
            <li>Source text</li>
            <li>Translated text</li>
            <li>Languages used</li>
            <li>Timestamp</li>
          </ul>
        </Section>

        <ImageBlock label="History View" src={history} />

        {/* ── API Design ── */}
        <Section title="API Design">
          GeoSpeak follows a minimal REST-style API design:
          <pre className="gs-pre font-poppins">
{`POST /translate
GET  /history
GET  /languages`}
          </pre>
          APIs return JSON responses and are consumed via fetch requests.
        </Section>

        <ImageBlock label="Postman API Response" src={postman} />

        {/* ── Database ── */}
        <Section title="Database Design">
          <strong>SQLAlchemy ORM</strong> is used to persist translation
          records in SQLite. The schema is intentionally simple to keep the
          system extensible.
        </Section>

        <ImageBlock label="Database Structure" src={db} />

        {/* ── Limitations ── */}
        <Section title="Limitations">
          <ul className="gs-list">
            <li>No authentication (single-user demo scope)</li>
            <li>No rate limiting</li>
            <li>No speech-to-text</li>
          </ul>
          <br />
          These constraints are intentional — focus stays on API integration
          and backend logic.
        </Section>

        {/* ── Future ── */}
        <Section title="Future Improvements">
          <ul className="gs-list">
            <li>User accounts &amp; personal history</li>
            <li>Speech-to-text input</li>
            <li>Translation analytics</li>
            <li>Cloud deployment</li>
          </ul>
        </Section>

        {/* ── Links ── */}
        <Section title="Project Links">
          <div className="gs-links">
            <a
              href="https://github.com/saoodbaloch/GeoSpeak.git"
              target="_blank"
              rel="noopener noreferrer"
              className="gs-link-btn gs-link-outline font-poppins"
            >
              <Github size={15} />
              View Repository
            </a>
          </div>
        </Section>

        {/* ── Brutal Truth ── */}
        <div className="gs-brutal">
          <span className="gs-brutal-line" />
          <p className="gs-brutal-text font-montserrat">
            Brutal truth — GeoSpeak is not a flashy SaaS product.<br />
            It is a clean, API-driven backend project that demonstrates<br />
            real integration, data persistence, and system flow.
          </p>
          <span className="gs-brutal-line" />
        </div>

      </article>
    </div>
  );
};

/* ── Section Component ── */
const Section = ({ title, children }) => (
  <div className="gs-section">
    {title && (
      <h2 className="gs-section-title font-montserrat">{title}.</h2>
    )}
    <div className="gs-section-body font-poppins">{children}</div>
  </div>
);

/* ── Image with Lightbox ── */
const ImageBlock = ({ label, src }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="gs-img-block">
        <p className="gs-img-label font-poppins">{label}</p>
        <img
          src={src}
          alt={label}
          onClick={() => setOpen(true)}
          className="gs-img"
        />
        <span className="gs-img-hint font-poppins">Click to expand</span>
      </div>

      {open && (
        <div className="gs-lightbox" onClick={() => setOpen(false)}>
          <img src={src} alt={label} className="gs-lightbox-img" />
        </div>
      )}
    </>
  );
};

export default GeoSpeakCaseStudy;