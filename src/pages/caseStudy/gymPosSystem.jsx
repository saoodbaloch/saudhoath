import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Download } from "lucide-react";
import "./GymPosSystem.css";

import systemFlowDiagram from "../../assets/flowdiagram.png";
import systemArchitecture from "../../assets/systemArchitecture.png";
import attendanceReport from "../../assets/gym_attendance.png";
import member from "../../assets/member_management.png";
import pos from "../../assets/gym_pos_billing.png";
import postman from "../../assets/postman.png";
import DB from "../../assets/DB.png";
import login from "../../assets/gym_login.png";

// ── New module images (add these to your assets folder) ──
import dashboard from "../../assets/dashboard.png";
import renewals from "../../assets/renewals.png";
import plans from "../../assets/plans.png";
import walkIn from "../../assets/gym_walk_in_guest.png";
import trainers from "../../assets/gym_trainer.png";
import lockers from "../../assets/gym_lockers.png";
import bodyMeasurements from "../../assets/gym_bodymeasurement.png";
import paymentHistory from "../../assets/gym_payment_history.png";
import reports from "../../assets/gym_report.png";
import expenses from "../../assets/gym_expensis.png";
import settings from "../../assets/gym_setting.png";

const GymPosSystem = () => {
  const navigate = useNavigate();

  return (
    <div className="gps-page">
      <article className="gps-container">

        {/* ── Back Button ── */}
        <button onClick={() => navigate(-1)} className="gps-back font-poppins">
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>

        {/* ── Hero ── */}
        <div className="gps-hero">
          <span className="gps-hero-tag font-poppins">Case Study</span>
          <h1 className="gps-hero-title font-montserrat">
            Gym POS Management System
          </h1>
          <p className="gps-hero-sub font-poppins">
            Backend-focused case study demonstrating real-world POS logic,
            data integrity, and system-level decision making.
          </p>
        </div>

        {/* ── Project Overview ── */}
        <Section title="Project Overview">
          Gym POS Management System is a backend-driven internal system designed
          to manage daily gym operations including members, memberships, POS
          billing, attendance, expenses, and reports.
          <br /><br />
          Built with a <strong>Laravel RESTful API</strong> and a{" "}
          <strong>React-based admin dashboard</strong> connected via secure
          token-based authentication.
          <br /><br />
          The primary focus is business logic, data integrity, and real-world
          POS constraints — not UI gimmicks.
        </Section>

        <ImagePlaceholder
          label="System Flow Diagram (React → Laravel API → Database)"
          src={systemFlowDiagram}
        />

        {/* ── Problem ── */}
        <Section title="Problem Statement">
          Most small gyms rely on manual registers or spreadsheets, which causes:
          <ul className="gps-list">
            <li>Lost payment history</li>
            <li>No automated membership expiry tracking</li>
            <li>Incorrect attendance records</li>
            <li>No centralized reporting</li>
            <li>Inventory mismanagement</li>
          </ul>
          <br />
          These problems directly impact revenue tracking and daily operations.
        </Section>

        {/* ── Solution ── */}
        <Section title="Solution">
          This system centralizes all gym operations into a single
          backend-controlled POS system accessible only to an admin.
          <br /><br />
          Core goals:
          <ul className="gps-list">
            <li>Enforce real-world gym rules through backend logic</li>
            <li>Prevent data inconsistency</li>
            <li>Provide actionable business reports</li>
          </ul>
        </Section>

        {/* ── Architecture ── */}
        <Section title="System Architecture">
          The system follows a clean separation of concerns:
          <pre className="gps-pre font-poppins">
            {`React Admin Dashboard
        ↓
Laravel REST API
        ↓
Database`}
          </pre>
          <ul className="gps-list">
            <li>Stateless REST API</li>
            <li>Token-based authentication</li>
            <li>Backend validation over frontend trust</li>
          </ul>
        </Section>

        <ImagePlaceholder label="Architecture Diagram" src={systemArchitecture} />

        {/* ── Auth ── */}
        <Section title="Authentication & Access Control">
          <ul className="gps-list">
            <li>Admin-only system</li>
            <li>Admin seeded via Laravel Seeder</li>
            <li>Login required for all modules</li>
            <li>Axios interceptor attaches token automatically</li>
          </ul>
          <pre className="gps-pre font-poppins">
            {`Authorization: Bearer {admin_token}`}
          </pre>
        </Section>

        <ImagePlaceholder label="Login Screen / Postman Auth Response" src={login} />

        {/* ══════════════════════════════════════════
            ── Core Modules & Business Logic ──
        ══════════════════════════════════════════ */}
        <Section title="Core Modules & Business Logic">
          The system is divided into <strong>15 functional modules</strong>,
          each handling a specific area of gym operations. Every module
          communicates through the Laravel REST API with strict backend validation.
        </Section>

        {/* 1 — Dashboard */}
        <Section>
          <strong>Dashboard:</strong>
          <p className="gps-inline-p">
            Provides a real-time overview of the gym's health. Displays
            business metrics like daily revenue, active memberships, total
            members, and pending renewals. Operational insights allow the
            admin to make quick decisions without digging through individual
            modules.
          </p>
        </Section>

        <ImagePlaceholder label="Dashboard — Business Metrics & Revenue Summary" src={dashboard} />

        {/* 2 — Members */}
        <Section>
          <strong>Member Management:</strong>
          <ul className="gps-list">
            <li>Member creation with image storage</li>
            <li>Stores contact details, membership info, and activity history</li>
            <li>Update, delete, print, fee actions</li>
            <li>Membership, dates, and payments linked per member</li>
          </ul>
        </Section>

        <ImagePlaceholder label="Member List / Create Member API Response" src={member} />

        {/* 3 — Renewals */}
        <Section>
          <strong>Renewals:</strong>
          <p className="gps-inline-p">
            Automates membership renewal tracking. Backend identifies expiring
            and expired memberships and queues them for renewal. Prevents
            lapses in active membership status without manual admin
            intervention.
          </p>
        </Section>

        <ImagePlaceholder label="Renewals — Expiry Tracking & Renewal Queue" src={renewals} />

        {/* 4 — POS / Billing */}
        <Section>
          <strong>POS / Billing Logic:</strong>
          <ul className="gps-list">
            <li>Member must be selected before any transaction</li>
            <li>Duplicate cart items blocked at backend level</li>
            <li>Only one membership plan allowed per cart</li>
            <li>Invoice and receipt generated automatically after payment</li>
            <li>Supports mixed cart — products + membership in one transaction</li>
          </ul>
        </Section>

        <ImagePlaceholder label="POS Screen / Invoice API Response" src={pos} />

        {/* 5 — Plans */}
        <Section>
          <strong>Plans:</strong>
          <p className="gps-inline-p">
            Admin can create and manage membership plans with custom durations
            and pricing. Plans are referenced at point-of-sale and during
            renewals. Backend enforces one active plan per member at all times.
          </p>
        </Section>

        <ImagePlaceholder label="Membership Plans — Create & Manage Pricing" src={plans} />

        {/* 6 — Attendance */}
        <Section>
          <strong>Attendance System:</strong>
          <p className="gps-inline-p">
            Tracks member check-ins with date-restricted backend logic.
            Duplicate entries within a 24-hour window are blocked. Full
            attendance history is available per member for reporting.
          </p>
        </Section>

        <ImagePlaceholder label="Attendance Tracking / Report Export" src={attendanceReport} />

        {/* 7 — Walk-In / Guest */}
        <Section>
          <strong>Walk-In / Guest Management:</strong>
          <p className="gps-inline-p">
            Handles temporary visitors and guest registrations separately from
            regular members. Walk-in fees are processed through the POS.
            Keeps permanent member records clean and uncluttered by guest
            traffic.
          </p>
        </Section>

        <ImagePlaceholder label="Walk-In / Guest Registration" src={walkIn} />

        {/* 8 — Trainers */}
        <Section>
          <strong>Trainers:</strong>
          <p className="gps-inline-p">
            Maintains trainer profiles including contact info, specializations,
            and member assignments. Trainers can be linked to specific members,
            enabling gym management to track workload and client distribution.
          </p>
        </Section>

        <ImagePlaceholder label="Trainer Records & Member Assignments" src={trainers} />

        {/* 9 — Lockers */}
        <Section>
          <strong>Lockers:</strong>
          <p className="gps-inline-p">
            Tracks locker allocation and availability in real time. Each locker
            is assigned to a member with a start and end date. Backend prevents
            double allocation and flags expired locker assignments
            automatically.
          </p>
        </Section>

        <ImagePlaceholder label="Locker Allocation & Availability" src={lockers} />

        {/* 10 — Body Measurements */}
        <Section>
          <strong>Body Measurements:</strong>
          <p className="gps-inline-p">
            Stores fitness progress data per member — weight, BMI, chest, waist,
            and other custom measurements. History is timestamped so progress
            can be tracked over time. Useful for trainers and members
            monitoring fitness goals.
          </p>
        </Section>

        <ImagePlaceholder label="Body Measurements — Fitness Progress History" src={bodyMeasurements} />

        {/* 11 — Payment History */}
        <Section>
          <strong>Payment History:</strong>
          <p className="gps-inline-p">
            Provides a complete, chronological log of all transactions.
            Filterable by member, date range, or payment type. Every invoice
            from the POS module is stored here permanently for audit and
            reconciliation purposes.
          </p>
        </Section>

        <ImagePlaceholder label="Payment History — Transaction Logs" src={paymentHistory} />


        {/* 13 — Reports */}
        <Section>
          <strong>Reports:</strong>
          <p className="gps-inline-p">
            Generates business intelligence reports covering revenue,
            membership growth, attendance trends, and product sales. Reports
            are exportable for offline analysis. Designed to give the gym owner
            clear visibility into operational performance.
          </p>
        </Section>

        <ImagePlaceholder label="Reports — Business Intelligence & Performance" src={reports} />

        {/* 14 — Expenses */}
        <Section>
          <strong>Expenses:</strong>
          <p className="gps-inline-p">
            Records all operational expenses including rent, utilities,
            equipment, and salaries. Expense categories are customizable.
            Combined with revenue data from reports, this module enables
            accurate profit and loss tracking.
          </p>
        </Section>

        <ImagePlaceholder label="Expenses — Operational Cost Tracking" src={expenses} />

        {/* 15 — Settings */}
        <Section>
          <strong>Settings:</strong>
          <p className="gps-inline-p">
            Provides system-wide configuration controls — gym name, logo,
            currency, tax settings, low-stock thresholds, and other
            administrative preferences. Settings changes propagate across
            all modules without requiring code changes.
          </p>
        </Section>

        <ImagePlaceholder label="Settings — System Configuration" src={settings} />


        {/* ── API ── */}
        <Section title="API Design">
          RESTful, token-protected endpoints with proper HTTP status codes.
        </Section>

        <ImagePlaceholder label="Postman API Responses" src={postman} />

        {/* ── Future ── */}
        <Section title="Future Improvements">
          <ul className="gps-list">
            <li>Role-based access control</li>
            <li>Invoice history per member</li>
            <li>SMS / email reminders for renewals</li>
            <li>Cloud deployment</li>
            <li>Mobile app for member self-check-in</li>
          </ul>
        </Section>

        {/* ── Brutal Truth ── */}
        <div className="gps-brutal">
          <span className="gps-brutal-line" />
          <p className="gps-brutal-text font-montserrat">
            This is a complete Gym Management & POS System built for real-world fitness
            businesses. It combines membership management, attendance tracking,
            supplement sales, inventory control, payment processing, reporting, and
            administrative operations into a single scalable platform.
          </p>
          <span className="gps-brutal-line" />
        </div>

      </article>
    </div>
  );
};

/* ── Section Component ── */
const Section = ({ title, children }) => (
  <div className="gps-section">
    {title && (
      <h2 className="gps-section-title font-montserrat">{title}.</h2>
    )}
    <div className="gps-section-body font-poppins">{children}</div>
  </div>
);

/* ── Image with Lightbox ── */
const ImagePlaceholder = ({ label, src }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="gps-img-block">
        <p className="gps-img-label font-poppins">{label}</p>
        <img
          src={src}
          alt={label}
          onClick={() => setOpen(true)}
          className="gps-img"
        />
        <span className="gps-img-hint font-poppins">Click to expand</span>
      </div>

      {open && (
        <div className="gps-lightbox" onClick={() => setOpen(false)}>
          <img src={src} alt={label} className="gps-lightbox-img" />
        </div>
      )}
    </>
  );
};

export default GymPosSystem;