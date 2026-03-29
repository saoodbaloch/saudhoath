import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import systemFlowDiagram from "../../assets/flowdiagram.png";
import systemArchitecture from "../../assets/systemArchitecture.png";
import attendanceReport from "../../assets/attendanceReport.png";
import alert from "../../assets/alert.png";
import member from "../../assets/member.png";
import pos from "../../assets/pos.png";
import postman from "../../assets/postman.png";
import DB from "../../assets/DB.png";
import login from "../../assets/login2.png";

const GymPosSystem = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-14 sm:py-20 px-4 sm:px-5">
      <section className="max-w-5xl mx-auto bg-white p-5 sm:p-10 rounded-2xl shadow-lg text-black">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-black mb-8 transition outline-none focus:outline-none focus:ring-0 border-none"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-montserrat border-b-2 border-black inline-block pb-2">
          Gym POS Management System
        </h1>

        <p className="text-gray-700 font-poppins mb-10">
          Backend-focused case study demonstrating real-world POS logic,
          data integrity, and system-level decision making.
        </p>

        {/* PROJECT OVERVIEW */}
        <Section title="Project Overview">
          Gym POS Management System is a backend-driven internal system designed
          to manage daily gym operations including members, memberships, POS
          billing, attendance, expenses, and reports.
          <br /><br />
          The system is built with a Laravel RESTful API and a React-based admin
          dashboard connected via secure token-based authentication.
          <br /><br />
          The primary focus of this project is business logic, data integrity,
          and real-world POS constraints — not UI gimmicks.
        </Section>

        <ImagePlaceholder label="System Flow Diagram (React → Laravel API → Database)" src={systemFlowDiagram} />

        {/* PROBLEM */}
        <Section title="Problem Statement">
          Most small gyms rely on manual registers or spreadsheets, which causes:
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Lost payment history</li>
            <li>No automated membership expiry tracking</li>
            <li>Incorrect attendance records</li>
            <li>No centralized reporting</li>
            <li>Inventory mismanagement</li>
          </ul>
          <br />
          These problems directly impact revenue tracking and daily operations.
        </Section>

        {/* SOLUTION */}
        <Section title="Solution">
          This system centralizes all gym operations into a single backend-controlled
          POS system accessible only to an admin.
          <br /><br />
          Core goals:
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Enforce real-world gym rules through backend logic</li>
            <li>Prevent data inconsistency</li>
            <li>Provide actionable business reports</li>
          </ul>
        </Section>

        {/* SYSTEM ARCHITECTURE */}
        <Section title="System Architecture">
          The system follows a clean separation of concerns:
          <pre className="bg-gray-100 p-4 rounded-md mt-4 text-sm whitespace-pre-wrap break-words overflow-x-auto">
React Admin Dashboard
        ↓
Laravel REST API
        ↓
Database
          </pre>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>Stateless REST API</li>
            <li>Token-based authentication</li>
            <li>Backend validation over frontend trust</li>
          </ul>
        </Section>

        <ImagePlaceholder label="Architecture Diagram" src={systemArchitecture} />

        {/* AUTHENTICATION */}
        <Section title="Authentication & Access Control">
          <ul className="list-disc list-inside space-y-1">
            <li>Admin-only system</li>
            <li>Admin seeded via Laravel Seeder</li>
            <li>Login required for all modules</li>
            <li>Axios interceptor attaches token automatically</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-md mt-4 text-sm">
Authorization: Bearer {"{admin_token}"}
          </pre>
        </Section>

        <ImagePlaceholder label="Login Screen OR Postman Auth Response" src={login} />

        {/* CORE MODULES */}
        <Section title="Core Modules & Business Logic">
          <strong>Member Management:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Member creation with image storage</li>
            <li>Membership, dates, and payments linked</li>
            <li>Update, delete, print, fee actions</li>
          </ul>
        </Section>

        <ImagePlaceholder label="Member List OR Create Member API Response" src={member} />

        <Section>
          <strong>Membership Rules:</strong>
          <p className="mt-2">
            Backend enforces one active membership per member.
            Duplicate attempts return validation errors.
          </p>
        </Section>

        <Section>
          <strong>POS Logic:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Member must be selected first</li>
            <li>Duplicate cart items blocked</li>
            <li>Only one membership allowed</li>
            <li>Receipt generated after payment</li>
          </ul>
        </Section>

        <ImagePlaceholder label="POS Screen OR Invoice API Response" src={pos} />

        <Section title="Product & Inventory Management">
          Product quantity auto-decreases on sale.
          Low-stock alerts trigger when threshold is crossed.
        </Section>

        <ImagePlaceholder label="Inventory Alert" src={alert} />

        <Section title="Attendance System">
          Attendance is date-restricted.
          Backend blocks duplicate entries within 24 hours.
        </Section>

        <ImagePlaceholder label="Attendance OR Report Export" src={attendanceReport} />

        <Section title="Database Design">
          Tables include:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>admins</li>
            <li>members</li>
            <li>membership_plans</li>
            <li>invoices & invoice_items</li>
            <li>products, attendance, expenses, settings</li>
          </ul>
          Relationships enforced via migrations & foreign keys.
        </Section>

        <ImagePlaceholder label="ER Diagram" src={DB} />

        <Section title="API Design">
          RESTful, token-protected endpoints with proper status codes.
        </Section>

        <ImagePlaceholder label="Postman API Responses" src={postman} />

        <Section title="Why No Live Demo">
          This is an internal POS system.
          Hosting a full backend with persistent storage is cost-inefficient
          for a portfolio project.
        </Section>

        <Section title="Future Improvements">
          <ul className="list-disc list-inside space-y-1">
            <li>Role-based access</li>
            <li>Invoice history per member</li>
            <li>SMS/email reminders</li>
            <li>Cloud deployment</li>
          </ul>
        </Section>

        {/* PROJECT LINKS */}
        <Section title="Project Links">
          <p>
            <strong>GitHub Frontend:</strong>{" "}
            <a
              href="https://github.com/saoodbaloch/gympos.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View React Dashboard Repo
            </a>
          </p>
          <p>
            <strong>GitHub Backend:</strong>{" "}
            <a
              href="https://github.com/saoodbaloch/gym-pos-backend.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Laravel API Repo
            </a>
          </p>
          <p className="mt-2">
            <strong>Download Dummy Database:</strong>{" "}
            <a
              href="/gym_pos.sql"
              download
              className="underline"
            >
              Download SQL Export
            </a>
          </p>
        </Section>

        <p className="mt-12 font-semibold font-poppins">
          Brutal truth:  
          This is not a “CRUD project”.  
          This is real backend engineering work.
        </p>

      </section>
    </div>
  );
};

// SECTION COMPONENT
const Section = ({ title, children }) => (
  <div className="mb-10">
    {title && (
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-montserrat border-b-2 border-black inline-block pb-1">
        {title}.
      </h2>
    )}
    <div className="text-gray-700 font-poppins text-sm sm:text-base leading-7 sm:leading-relaxed">
      {children}
    </div>
  </div>
);

const ImagePlaceholder = ({ label, src }) => {
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

export default GymPosSystem;
