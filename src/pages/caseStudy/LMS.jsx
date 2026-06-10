import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./GymPosSystem.css"; // same CSS — same theme

// ── Student Panel Images ──
import authScreens from "../../assets/aigens/AigensloginPage.png";
import authScreens1 from "../../assets/aigens/AigensRegisterpage.png";
import authScreens2 from "../../assets/aigens/AigensResetlink.png";
import homeDashboard from "../../assets/aigens/Aigenshome.png";
import courseCatalog from "../../assets/aigens/AigensCourseCard.png";
import courseDetail from "../../assets/aigens/AigensCourseCardDetails.png";
import checkoutJazzCash from "../../assets/aigens/AigensJazzcashpayment.png";
import checkoutSafePay from "../../assets/aigens/AigensSafepaypayment.png";
import myCourses from "../../assets/aigens/Aigensmycourse.png";
import videoPlayer from "../../assets/aigens/Aigensmycourseenrolled.png";
import certificate from "../../assets/aigens/AigensCertificate.png";
import supportChat from "../../assets/aigens/AigensChatbot.png";
import supportTicket from "../../assets/aigens/AigensTicketGenrate.png";

// ── Admin Panel Images ──
import adminDashboard from "../../assets/aigens/AigensAdminDashboard.png";
import courseManagement from "../../assets/aigens/AigensEditCourse.png";
import createCourse from "../../assets/aigens/AigensCourseAdd.png";
import categoryManagement from "../../assets/aigens/Aigenscategory.png";
import studentManagement from "../../assets/aigens/AigensUserManagement.png";
import ticketManagement from "../../assets/aigens/AigensAdminSupport.png";
import certificateCorrection from "../../assets/aigens/AigensCertificateCorrection.png";
import reviewsTestimonials from "../../assets/aigens/AigensReviews.png";
import couponManagement from "../../assets/aigens/AigensCouponManagement.png";

// ── System ──
import systemArchitecture from "../../assets/aigens/AigensSystemArchtecture.png";
import emailNotification from "../../assets/aigens/emailWorkFlow.png";
import aiChatbotFlow from "../../assets/aigens/chatbotFlow.png";
import securityOverview from "../../assets/aigens/securityArchetecture.png";

// ── Post-Development Enhancement Images ──
import profileManagement from "../../assets/aigens/AigensUserProfileManagement.png";
import notificationCenter from "../../assets/aigens/AigensbelliconNotification.png";
import wishlist from "../../assets/aigens/AigensWishList.png";
import badgesAchievements from "../../assets/aigens/AigensUserRewardBadges.png";
import discussionSystem from "../../assets/aigens/AigensdiscussionForm.png";
import adminDiscussion from "../../assets/aigens/AigensDiscussionManagement.png";
import banManagement from "../../assets/aigens/AigensBanUnban.png";

const LMS = () => {
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
            Aigens — Online Learning Management System
          </h1>
          <p className="gps-hero-sub font-poppins">
            A full-stack LMS with AI-powered support, secure video streaming,
            dual payment gateways, and automated certificate generation.
          </p>
        </div>

        {/* ── Project Overview ── */}
        <Section title="Project Overview">
          Aigens is a modern Learning Management System built to deliver secure,
          scalable online education. Students can purchase courses, stream
          protected video content, generate certificates, and get instant
          support through an AI chatbot.
          <br /><br />
          Built with a <strong>Laravel RESTful API</strong> backend and a{" "}
          <strong>React.js</strong> frontend, connected via token-based
          authentication. Third-party integrations include{" "}
          <strong>Bunny.net</strong> for video streaming,{" "}
          <strong>Groq AI</strong> for the support chatbot, and{" "}
          <strong>SafePay + JazzCash</strong> for payments.
          <br /><br />
          The system ships as two panels: a <strong>Student Panel</strong> and
          an <strong>Admin Panel</strong> — each purpose-built for its audience.
        </Section>

        {/* ── Tech Stack ── */}
        <Section title="Tech Stack">
          <pre className="gps-pre font-poppins">
            {`Frontend      →  React.js
Backend       →  Laravel REST API
Database      →  MySQL
Video CDN     →  Bunny.net Secure Streaming
AI Support    →  Groq AI Chatbot
Payments      →  SafePay + JazzCash
Emails        →  Automated Transactional System`}
          </pre>
        </Section>

        <ImagePlaceholder
          label="System Architecture — React → Laravel API → MySQL + Integrations"
          src={systemArchitecture}
        />

        {/* ── Problem ── */}
        <Section title="Problem Statement">
          Traditional course selling methods (WhatsApp groups, manual
          spreadsheets, unprotected Google Drive links) cause:
          <ul className="gps-list">
            <li>Content piracy — videos downloaded and redistributed freely</li>
            <li>No payment tracking or enrollment automation</li>
            <li>Manual certificate generation prone to errors</li>
            <li>No centralized support — students get ignored</li>
            <li>Zero business analytics for course owners</li>
          </ul>
          <br />
          These gaps directly impact revenue protection and student trust.
        </Section>

        {/* ── Solution ── */}
        <Section title="Solution">
          Aigens replaces all of that with a single backend-controlled platform.
          <br /><br />
          Core goals:
          <ul className="gps-list">
            <li>Protect content with streaming-only access — no downloads</li>
            <li>Automate enrollment, certificates, and email notifications</li>
            <li>Provide instant AI support with a ticket escalation fallback</li>
            <li>Give the admin complete visibility into revenue and activity</li>
          </ul>
        </Section>

        {/* ════════════════════════════════════════
            STUDENT PANEL
        ════════════════════════════════════════ */}
        <Section title="Student Panel">
          The student-facing side of the platform covers the complete learning
          journey — from registration all the way to certificate generation.
        </Section>

        {/* 1 — Auth */}
        <Section>
          <strong>Authentication:</strong>
          <p className="gps-inline-p">
            Students register with name, email, and password. Login is
            secured with token-based auth. A forgot password flow sends a
            reset link via email — no manual admin intervention required.
          </p>
        </Section>

        <ImagePlaceholder label="Login Screen" src={authScreens} />
        <ImagePlaceholder label="Registration Screen" src={authScreens1} />
        <ImagePlaceholder label="Password Reset Screen" src={authScreens2} />

        {/* 2 — Home Dashboard */}
        <Section>
          <strong>Home Dashboard:</strong>
          <p className="gps-inline-p">
            The landing page surfaces featured courses, popular courses, new
            arrivals, course categories, active promotions, and platform
            announcements. Designed to drive course discovery without
            overwhelming the student.
          </p>
        </Section>

        <ImagePlaceholder
          label="Home Dashboard — Featured & Popular Courses"
          src={homeDashboard}
        />

        {/* 3 — Course Catalog */}
        <Section>
          <strong>Course Catalog:</strong>
          <ul className="gps-list">
            <li>Browse all available courses</li>
            <li>Search by keyword</li>
            <li>Filter by category (Web Dev, Marketing, Cyber Security, etc.)</li>
            <li>View full course details, curriculum, and instructor info</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Course Catalog with Search & Category Filters"
          src={courseCatalog}
        />

        <ImagePlaceholder
          label="Course Detail Page — Curriculum & Enrollment CTA"
          src={courseDetail}
        />

        {/* 4 — Purchase / Checkout */}
        <Section>
          <strong>Course Purchase System:</strong>
          <p className="gps-inline-p">
            Two payment methods supported at checkout. After successful
            payment, the course is automatically assigned to the student's
            account, appears in My Courses, and a confirmation email is
            dispatched immediately — no manual admin step needed.
          </p>
          <ul className="gps-list">
            <li><strong>JazzCash</strong> — mobile wallet payment with CNIC verification</li>
            <li><strong>SafePay</strong> — credit/debit card via Pakistan's secure gateway</li>
            <li>Coupon code field at checkout for discount application</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Checkout — JazzCash Payment Flow"
          src={checkoutJazzCash}
        />

        <ImagePlaceholder
          label="Checkout — SafePay Card Payment Flow"
          src={checkoutSafePay}
        />

        {/* 5 — My Courses */}
        <Section>
          <strong>My Courses:</strong>
          <ul className="gps-list">
            <li>View all enrolled courses with progress percentage</li>
            <li>Continue learning from last position</li>
            <li>Watch protected video lessons via secure streaming</li>
            <li>Track completed modules within a course</li>
          </ul>
          <p className="gps-inline-p">
            <strong>Security restrictions enforced at backend:</strong> students
            cannot download videos, cannot download course content, and cannot
            access any course they haven't purchased. Streaming-only access.
          </p>
        </Section>

        <ImagePlaceholder
          label="My Courses — Enrolled Course List with Progress"
          src={myCourses}
        />

        {/* 6 — Video Streaming */}
        <Section>
          <strong>Video Streaming Security (Bunny.net):</strong>
          <p className="gps-inline-p">
            All course videos are hosted and delivered through Bunny.net's
            secure CDN. Signed streaming URLs expire after a set window,
            preventing link sharing. The player itself blocks right-click
            saving and browser download interceptors.
          </p>
          <ul className="gps-list">
            <li>Secure, expiring streaming URLs per session</li>
            <li>Fast global CDN delivery — no buffering for students</li>
            <li>Unauthorized access prevention at URL level</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Video Player — Bunny.net Secure Streaming"
          src={videoPlayer}
        />

        {/* 7 — Certificate */}
        <Section>
          <strong>Certificate Management:</strong>
          <p className="gps-inline-p">
            After completing a course, the student can generate their
            certificate exactly <strong>one time</strong>. The certificate
            includes the student's name, course name, completion date, a
            unique certificate ID, and a QR code for verification.
          </p>
          <p className="gps-inline-p">
            If the name is misspelled or any detail is wrong, the student
            cannot regenerate it themselves — they must raise a support
            ticket. Only the admin can approve and reissue a corrected
            certificate. This prevents certificate abuse while still allowing
            legitimate corrections.
          </p>
        </Section>

        <ImagePlaceholder
          label="Certificate — One-Time Generation with QR Verification"
          src={certificate}
        />

        {/* 8 — Support */}
        <Section>
          <strong>Support Center — AI Chatbot + Ticket System:</strong>
          <p className="gps-inline-p">
            The support center is the first line of help. Students open
            the chat and the <strong>Groq AI chatbot</strong> handles common
            issues — payment problems, certificate queries, access issues,
            login help — instantly, 24/7.
          </p>
          <p className="gps-inline-p">
            If the AI cannot resolve the issue, the system automatically
            generates a support ticket and notifies the admin. The student
            can track their ticket status (Open → In Progress → Resolved →
            Closed) directly from the dashboard.
          </p>
        </Section>

        <ImagePlaceholder
          label="Support Center — Groq AI Chatbot in Action"
          src={supportChat}
        />

        <ImagePlaceholder
          label="My Tickets — Ticket Status Tracking"
          src={supportTicket}
        />

        {/* ════════════════════════════════════════
            ADMIN PANEL
        ════════════════════════════════════════ */}
        <Section title="Admin Panel">
          The admin panel gives the platform owner complete control over
          content, students, support, revenue, and configuration — all from
          a single dashboard.
        </Section>

        {/* Admin Dashboard */}
        <Section>
          <strong>Dashboard Overview:</strong>
          <p className="gps-inline-p">
            Real-time business metrics at a glance — total revenue, registered
            students, active courses, enrollment count, open support tickets,
            recent purchases, and platform activity feed. Everything the admin
            needs to understand the current state of the business without
            digging into individual modules.
          </p>
        </Section>

        <ImagePlaceholder
          label="Admin Dashboard — Revenue, Students, Courses & Tickets"
          src={adminDashboard}
        />

        {/* Course Management */}
        <Section>
          <strong>Course Management:</strong>
          <ul className="gps-list">
            <li>Create courses with title, description, thumbnail, category, pricing, and video lessons</li>
            <li>Set original price alongside discounted price for display</li>
            <li>Upload video lessons directly — Bunny.net handles secure delivery</li>
            <li>Mark individual lessons as free preview or locked</li>
            <li>Edit or delete existing courses at any time</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Course Management — Course List with Edit & Delete"
          src={courseManagement}
        />

        <ImagePlaceholder
          label="Create Course — Full Form with Lesson Upload"
          src={createCourse}
        />

        {/* Category Management */}
        <Section>
          <strong>Category Management:</strong>
          <p className="gps-inline-p">
            Admin can add, edit, and delete course categories. Categories
            organize the catalog and power the student-facing filter system.
            Deleting a category with linked courses prompts the admin to
            migrate those courses first — preventing broken references.
          </p>
        </Section>

        <ImagePlaceholder
          label="Category Management — Add, Edit & Delete Categories"
          src={categoryManagement}
        />

        {/* Student Management */}
        <Section>
          <strong>Student Management:</strong>
          <p className="gps-inline-p">
            Full visibility into every registered student. Admin can view
            profiles, see which courses each student purchased, review
            enrollment history, check activity logs, and access their support
            ticket history — all from a single student record.
          </p>
        </Section>

        <ImagePlaceholder
          label="Users & Purchases — Student Profiles with Course History"
          src={studentManagement}
        />

        {/* Support Ticket Management */}
        <Section>
          <strong>Support Ticket Management:</strong>
          <p className="gps-inline-p">
            Admin receives all tickets escalated from the AI chatbot. For
            each ticket, the admin can view full details, update the status,
            reply directly to the student, and track the complete conversation
            history. Filter by status (Open / In Progress / Resolved) to
            prioritize the workload.
          </p>
        </Section>

        <ImagePlaceholder
          label="Support Tickets — Admin Reply & Status Management"
          src={ticketManagement}
        />

        {/* Certificate Correction */}
        <Section>
          <strong>Certificate Correction Management:</strong>
          <p className="gps-inline-p">
            When a student raises a certificate correction ticket, the admin
            gets a dedicated flow. Review the student's request, enter the
            corrected name and father's name, click "Fix & Email" — the
            corrected certificate is regenerated and automatically emailed
            to the student. No manual PDF editing required.
          </p>
        </Section>

        <ImagePlaceholder
          label="Certificate Correction — Admin Fix & Reissue Flow"
          src={certificateCorrection}
        />

        {/* Reviews & Testimonials */}
        <Section>
          <strong>Reviews & Testimonials Management:</strong>
          <ul className="gps-list">
            <li>View all student reviews submitted against courses</li>
            <li>Approve testimonials before they go live on the homepage</li>
            <li>Edit testimonial content and student details</li>
            <li>Hide or delete inappropriate reviews</li>
            <li>Add featured testimonials manually via admin</li>
            <li>Monitor per-course star ratings in one place</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Reviews Moderation & Testimonials Management"
          src={reviewsTestimonials}
        />

        {/* Coupon Management */}
        <Section>
          <strong>Coupon Management:</strong>
          <p className="gps-inline-p">
            Admin can create percentage-based or flat discount coupons.
            Each coupon has an expiry date, usage limit, minimum order
            amount, and optional course restriction. Active/inactive toggle
            lets the admin pause promotions without deleting them.
          </p>
        </Section>

        <ImagePlaceholder
          label="Coupons — Create & Manage Discount Codes"
          src={couponManagement}
        />

        {/* ── Email Notification System ── */}
        <Section title="Automated Email Notifications">
          The system sends transactional emails automatically for every key
          event — no manual admin action needed:
          <ul className="gps-list">
            <li><strong>Registration</strong> — Welcome email on account creation</li>
            <li><strong>Course Purchase</strong> — Confirmation + enrollment access notification</li>
            <li><strong>Support Updates</strong> — Ticket status change alerts</li>
            <li><strong>Certificate Correction</strong> — Approval notification with new certificate</li>
            <li><strong>Password Reset</strong> — Secure reset link delivery</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Email Notification — Purchase Confirmation & Certificate Email"
          src={emailNotification}
        />

        {/* ── AI Chatbot Workflow ── */}
        <Section title="AI Chatbot Workflow">
          The Groq-powered support flow is designed to resolve issues without
          human intervention wherever possible:
          <pre className="gps-pre font-poppins">
            {`Student opens Support Center
        ↓
Types their issue
        ↓
Groq AI analyzes the query
        ↓
Issue resolved?  →  YES → Instant response, done
        ↓ NO
Ticket auto-generated
        ↓
Admin notified
        ↓
Admin responds
        ↓
Student notified via dashboard + email`}
          </pre>
        </Section>

        <ImagePlaceholder
          label="AI Chatbot Flow — Instant Response to Ticket Escalation"
          src={aiChatbotFlow}
        />

        {/* ── Security ── */}
        <Section title="Security Architecture">
          The platform implements layered security across every surface:
          <ul className="gps-list">
            <li><strong>Authentication</strong> — Password hashing, session protection, secure login</li>
            <li><strong>Content Protection</strong> — Bunny.net signed URLs, download prevention, access control</li>
            <li><strong>API Security</strong> — Protected REST endpoints, authorization middleware, request validation</li>
            <li><strong>Payment Security</strong> — SafePay and JazzCash handle PCI compliance — credentials never touch our server</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Security Layers — Auth, Content, API & Payment"
          src={securityOverview}
        />

        {/* ════════════════════════════════════════
            POST-DEVELOPMENT ENHANCEMENTS
        ════════════════════════════════════════ */}
        <Section title="Post-Development Enhancements">
          After the initial platform launch, a second phase of development
          was completed — focused on user engagement, community building,
          platform governance, and a richer overall learning experience.
          These were not planned features; they were identified through
          real usage and delivered on top of an already-working system.
        </Section>

        {/* User Experience & Profile */}
        <Section>
          <strong>User Experience & Profile Management:</strong>
          <ul className="gps-list">
            <li>Full user profile management with profile image upload support</li>
            <li>Password reset and account recovery directly from profile settings</li>
            <li>Social media integration — LinkedIn and WhatsApp links per user profile</li>
            <li>Social sharing for courses and certificates — shareable links generated automatically</li>
            <li>Personalized dashboard experience based on enrollment and activity history</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="User Profile — Image Upload, Social Links & Account Settings"
          src={profileManagement}
        />

        {/* Notifications */}
        <Section>
          <strong>Real-Time Notification System:</strong>
          <p className="gps-inline-p">
            A full notification center was added — accessible via a bell icon
            in the navbar. Students receive automated notifications for
            enrollments, course updates, certificate generation, and support
            ticket responses. Admins can also push direct communications
            to individual users or the entire platform.
          </p>
        </Section>

        <ImagePlaceholder
          label="Notification Center — Bell Icon with Real-Time Alerts"
          src={notificationCenter}
        />

        {/* Learning & Engagement */}
        <Section>
          <strong>Learning & Engagement Features:</strong>
          <ul className="gps-list">
            <li>Wishlist functionality — students can save courses for future enrollment</li>
            <li>Course completion reward badges and achievement system</li>
            <li>Enhanced progress tracking with learning milestones per course</li>
            <li>Improved certificate generation and verification workflow</li>
            <li>Better course discovery through improved categorization and search</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Wishlist — Save Courses for Future Enrollment"
          src={wishlist}
        />

        <ImagePlaceholder
          label="Badges & Achievements — Course Completion Rewards"
          src={badgesAchievements}
        />

        {/* Community & Discussion */}
        <Section>
          <strong>Community & Discussion System:</strong>
          <p className="gps-inline-p">
            A platform-wide student discussion area was built to foster
            community engagement beyond just watching videos. Students can
            start discussions, post replies, and interact with other learners.
            Conversations are structured with threaded replies for clean
            readability.
          </p>
          <ul className="gps-list">
            <li>Student-initiated discussions with structured threaded replies</li>
            <li>Admin participation directly in discussion threads</li>
            <li>Dedicated discussion management panel for administrators</li>
            <li>Conversation tracking and full moderation tools</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="Discussion System — Threaded Replies & Community Chat"
          src={discussionSystem}
        />

        <ImagePlaceholder
          label="Admin Discussion Management — Moderation & Direct Engagement"
          src={adminDiscussion}
        />

        {/* Administration & Moderation */}
        <Section>
          <strong>Administration & Moderation Enhancements:</strong>
          <ul className="gps-list">
            <li>User account Ban/Unban — admin can restrict platform access instantly</li>
            <li>Improved activity monitoring — full log of user interactions and behavior</li>
            <li>Enhanced administrative controls for platform governance</li>
            <li>Centralized management of discussions, notifications, and user interactions</li>
          </ul>
        </Section>

        <ImagePlaceholder
          label="User Moderation — Ban/Unban & Activity Monitoring"
          src={banManagement}
        />

        {/* ── Future Enhancements ── */}
        <Section title="Future Enhancements">
          <ul className="gps-list">
            <li>Mobile Applications (Android & iOS)</li>
            <li>Referral System</li>
            <li>Blog/Articles</li>
            <li>Live Classes — Zoom</li>
            <li>Multiple Instructors</li>
            <li>Course Bundles</li>
            <li>Subscription Plans</li>
            <li>AI-Based Course Recommendations</li>
            <li>Instructor Performance Analytics</li>
            <li>Attendance Tracking for Live Sessions</li>
            <li>Learning Streaks & Achievement Tracking</li>
            <li>Student Leaderboard System</li>
            <li>Audit Logs & System Activity Tracking</li>
            <li>Public Certificate Verification Portal</li>
            <li>Social Login (Google, Facebook, GitHub)</li>
          </ul>
        </Section>

        {/* ── Platform Highlights ── */}
        <div className="gps-brutal">
          <span className="gps-brutal-line" />

          <p
            className="gps-brutal-text font-montserrat"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Aigens is a production-ready Learning Management System designed for
            real-world educational businesses. The platform delivers secure video
            streaming, automated certificate generation, integrated payment
            processing, AI-powered support, student engagement tools, discussion
            systems, notification management, and comprehensive administrative
            controls through a single scalable ecosystem.
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

export default LMS;