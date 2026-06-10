import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop"

import GymPosSystem from "./pages/caseStudy/gymPosSystem";
import GeoSpeak from "./pages/caseStudy/geoSpeak";
import LMS from "./pages/caseStudy/LMS";

import "./App.css";
import "./output.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1111] flex flex-col"> {/* ✅ Added wrapper */}
        <Navbar />
        <main className="flex-grow"> {/* ✅ Ensure main content takes remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />

            {/* Individual case study */}
            <Route
              path="/case-study/gym-pos"
              element={<GymPosSystem />}
            />
            <Route
              path="/case-study/geospeak-ai"
              element={<GeoSpeak />}
            />
            <Route
              path="/case-study/LMS"
              element={<LMS />}
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;