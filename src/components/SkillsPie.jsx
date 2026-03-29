import React, { useEffect, useRef, useState } from "react";
import "./SkillsPie.css";

export default function SkillsPie() {
  const pieRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // ek hi baar animate hoga
          }
        });
      },
      { threshold: 0.3 }
    );

    if (pieRef.current) {
      observer.observe(pieRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-row">
        {/* LEFT list - Frontend */}
        <div className="font-montserrat skills-col left-col">
          <h3>Part Frontend</h3>
          <ul>
            <li>HTML5, CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Bootstrap / Tailwind</li>
            <li>React.js</li>
            <li>Figma (UI Handoff)</li>
          </ul>
        </div>

        {/* CENTER: pie */}
        <div
          ref={pieRef}
          className={`pie-wrap ${visible ? "show" : ""}`}
          aria-hidden
        >
          <div className="pie">
            <div className="slice left-slice">
              <span className="font-montserrat slice-label">Frontend</span>
            </div>
            <div className="slice right-slice">
              <span className="font-montserrat slice-label">Backend</span>
            </div>
          </div>
        </div>

        {/* RIGHT list - Backend */}
        <div className="font-montserrat skills-col right-col">
          <h3>Part Backend</h3>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>RESTful APIs</li>
            <li>Authentication & MVC</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
