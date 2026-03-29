import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import cleanFace from "../assets/saudclean2.png";
import paintFace from "../assets/saudpaint2.png";
import mobileFace from "../assets/saudhalfpaint.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerRef = useRef(null);
  const paintRef = useRef(null);
  const cleanRef = useRef(null);
  const [hoverRight, setHoverRight] = useState(null);
  const [showText, setShowText] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  // Desktop animation useEffect
  useEffect(() => {
    if (isMobile) return; // Mobile me animation nahi chahiye
    const paintLayer = paintRef.current;
    const cleanLayer = cleanRef.current;
    const container = containerRef.current;

    paintLayer.style.transition = "clip-path 0.5s ease, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    cleanLayer.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    paintLayer.style.clipPath = "inset(0 50% 0 0%)";

    cleanRef.current.classList.add("start", "clean");
    paintRef.current.classList.add("start", "paint");

    setTimeout(() => {
      cleanRef.current.classList.remove("start");
      cleanRef.current.classList.add("animate-in");

      paintRef.current.classList.remove("start");
      paintRef.current.classList.add("animate-in");

      setTimeout(() => {
        setShowText(true);
        setAnimationDone(true);
      }, 800);
    });

    const handleMouseMove = (e) => {
      if (!animationDone) return;
      const x = e.clientX;
      const width = window.innerWidth;
      const percentage = (x / width) * 100;
      paintLayer.style.clipPath = `inset(0 ${percentage}% 0 0)`;
      cleanLayer.style.clipPath = "inset(0 0% 0 0%)";

      const maxShift = 50;
      const shift = -((x / width) - 0.5) * maxShift;
      cleanLayer.style.transform = `translateX(calc(-50% + ${shift}px))`;
      paintLayer.style.transform = `translateX(calc(-50% + ${shift}px))`;

      const centerBuffer = 100;
      if (Math.abs(x - width / 2) < centerBuffer) setHoverRight(null);
      else setHoverRight(x > width / 2);
    };

    const handleMouseLeave = () => {
      if (!animationDone) return;
      paintLayer.style.clipPath = "inset(0 50% 0 0%)";
      cleanLayer.style.transform = "translateX(-50%)";
      paintLayer.style.transform = "translateX(-50%)";
      setHoverRight(null);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animationDone, isMobile]);

  return (
    <div className="hero-container fixed-below-nav" ref={containerRef}>
      {isMobile ? (
         // ✅ Mobile version
        <div className="hero-text-wrapper">
          <img src={mobileFace} alt="Mobile Hero" className="hero-mobile-img" />
          <div className="hero-mobile-text left"></div>
          <div className="hero-mobile-text right"></div>
        </div>
      ) : (
        // Desktop version
        <>
          <img src={cleanFace} alt="Clean" className="hero-img clean start" ref={cleanRef} />
          <img src={paintFace} alt="Paint" className="hero-img paint start" ref={paintRef} />
          {showText && (
            <>
              <div className={`font-montserrat hero-text left ${hoverRight === null ? "fade-in" : hoverRight ? "fade-out" : "fade-in"}`}>
                Backend
              </div>
              <div className={`font-montserrat hero-text right ${hoverRight === null ? "fade-in" : hoverRight ? "fade-in" : "fade-out"}`}>
                Frontend
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
