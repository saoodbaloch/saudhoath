import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


import flow from "../../assets/geoSpeakFlowDiagram.png";
import history from "../../assets/historyview.png";
import translateInterface from "../../assets/translationInterface.png";
import postman from "../../assets/postManGeo.png";
import db from "../../assets/databaseStructure.png";

const GeoSpeakCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-14 sm:py-20 px-4 sm:px-5 font-poppins">
      <section className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg text-black">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-black mb-8 transition outline-none focus:outline-none focus:ring-0 border-none"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-montserrat border-b-2 border-black inline-block pb-2">
          GeoSpeak – Language Translation Platform
        </h1>

        <p className="text-gray-700 mb-10 text-base sm:text-lg">
          API-driven multilingual translation system with dictionary integration
          and persistent translation history.
        </p>

        {/* PROJECT OVERVIEW */}
        <Section title="Project Overview">
          GeoSpeak is a web-based language translation application built with
          Flask and SQLAlchemy. It integrates professional third-party APIs to
          translate text, fetch word definitions, and store translation history.
          <br /><br />
          The project focuses on backend integration, clean API flow, and
          persistent data handling rather than UI complexity.
        </Section>

        <Image label="System Flow (Frontend → Flask → APIs → Database)" src={flow} />

        {/* PROBLEM STATEMENT */}
        <Section title="Problem Statement">
          Language learners and professionals often rely on multiple tools:
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>One app for translation</li>
            <li>Another for word meanings</li>
            <li>No centralized history</li>
          </ul>
          <br />
          This fragmented workflow reduces efficiency and learning continuity.
        </Section>

        {/* SOLUTION */}
        <Section title="Solution">
          GeoSpeak unifies translation, definition lookup, and history tracking
          into a single application.
          <br /><br />
          Core objectives:
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Accurate multilingual translation</li>
            <li>Contextual understanding via dictionary</li>
            <li>Persistent translation records</li>
          </ul>
        </Section>

        {/* SYSTEM ARCHITECTURE */}
        <Section title="System Architecture">
          <pre className="bg-gray-100 p-4 rounded-md text-sm mt-4 whitespace-pre-wrap break-words overflow-x-auto font-poppins">
            Frontend (HTML / JS)
            ↓
            Flask Backend
            ↓
            DeepL Translation API
            Dictionary API
            ↓
            SQLite Database
          </pre>
        </Section>

        {/* TRANSLATION ENGINE */}
        <Section title="Translation Engine">
          - Uses DeepL API for high-quality translations
          - Supports multiple source & target languages
          - Language swap handled client-side
        </Section>

        <Image label="Translation Interface" src={translateInterface} />

        {/* DICTIONARY INTEGRATION */}
        <Section title="Dictionary Integration">
          After translation, GeoSpeak fetches word definitions using a dictionary
          API to help users understand meaning and context instead of raw text.
        </Section>

        {/* HISTORY */}
        <Section title="Translation History">
          Every translation is stored with:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Source text</li>
            <li>Translated text</li>
            <li>Languages</li>
            <li>Timestamp</li>
          </ul>
        </Section>

        <Image label="History View" src={history} />

        {/* API DESIGN */}
        <Section title="API Design">
          GeoSpeak follows a minimal REST-style API design:
          <pre className="bg-gray-100 p-4 rounded-md text-sm mt-3 font-poppins">
            POST /translate
            GET  /history
            GET  /languages
          </pre>
          APIs return JSON responses and are consumed via fetch requests.
        </Section>

        <Image label="Postman API Response" src={postman} />

        {/* DATABASE */}
        <Section title="Database Design">
          SQLAlchemy ORM is used to persist translation records in SQLite.
          The schema is intentionally simple to keep the system extensible.
        </Section>

        <Image label="Database Structure" src={db} />

        {/* LIMITATIONS */}
        <Section title="Limitations">
          - No authentication (single-user demo scope)
          - No rate limiting
          - No speech-to-text
          <br /><br />
          These constraints are intentional to keep focus on API integration
          and backend logic.
        </Section>

        {/* FUTURE IMPROVEMENTS */}
        <Section title="Future Improvements">
          <ul className="list-disc list-inside space-y-1">
            <li>User accounts & personal history</li>
            <li>Speech-to-text input</li>
            <li>Translation analytics</li>
            <li>Cloud deployment</li>
          </ul>
        </Section>

        {/* FINAL NOTE */}
        <p className="mt-12 font-semibold text-base sm:text-lg">
          Brutal truth:
          GeoSpeak is not a flashy SaaS product.
          It is a <strong>clean, API-driven backend project</strong> that demonstrates real
          integration, data persistence, and system flow.
        </p>

      </section>
    </div>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-montserrat border-b-2 border-black inline-block pb-1">
      {title}.
    </h2>
    <div className="text-gray-700 leading-relaxed text-sm sm:text-base font-poppins">
      {children}
    </div>
  </div>
);

const Image = ({ label, src }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail visible */}
      <div className="my-10 text-center">
        <p className="mb-3 text-sm font-poppins text-gray-600">
          {label}
        </p>

        <img
          src={src}
          alt={label}
          onClick={() => setOpen(true)}
          className="mx-auto w-full max-w-md rounded-md shadow-md border border-black cursor-pointer hover:scale-[1.01] transition"
        />
      </div>

      {/* Popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={src}
            alt={label}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default GeoSpeakCaseStudy;
