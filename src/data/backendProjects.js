import posSystem from "../assets/dashboard.png";
import geospeak from "../assets/geos.png";
import aigensLMS from "../assets/aigens/AigensDshboard.png"; // apni thumbnail image yahan daal

export const backendProjects = [
  {
    title: "GeoSpeak AI Project",
    category: "Techwiz 5",
    image: geospeak,
    github: "https://github.com/saoodbaloch/GeoSpeak.git",
    caseStudy: "/case-study/geospeak-ai",
  },
  {
    title: "Gym POS Management System",
    category: "Point of Sale System",
    image: posSystem,
    github: "https://github.com/saoodbaloch/gym-pos-backend.git",
    caseStudy: "/case-study/gym-pos",
  },
  {
    title: "Aigens — Learning Management System",
    category: "Enterprise LMS Platform",
    description:
      "A full-scale, revenue-generating LMS platform engineered for secure online education. Handles real payment transactions via JazzCash & SafePay, delivers course content through Bunny.net's protected video CDN, automates certification with unique QR-verified certificates, and resolves student queries through a Groq AI-powered support system — all managed through a purpose-built admin dashboard.",
    stack: ["React.js", "Laravel REST API", "MySQL", "Bunny.net", "Groq AI", "JazzCash", "SafePay"],
    image: aigensLMS,
    github: null, // private commercial project
    caseStudy: "/case-study/LMS",
  },
];