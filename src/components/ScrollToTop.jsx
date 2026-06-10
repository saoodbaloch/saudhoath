import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`scroll-top-btn ${visible ? "show" : ""} ${clicked ? "launch" : ""}`}
      aria-label="Scroll to top"
    >
      <span className="arrow-icon">↑</span>
    </button>
  );
};

export default ScrollToTop;