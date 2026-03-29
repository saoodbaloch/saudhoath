// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import "./css/portfolio.css";
import "../components/projectCards.css"
import Projects from "../components/ProjectCards";

function Home() {
  return (
    <div>
        <Hero />
        <div className=" project-cards-section">
          <Projects />
        </div>
    </div>
  );
}

export default Home;
