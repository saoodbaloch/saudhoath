import React from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-10 relative border-t border-gray-300 mt-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side → Name */}
        <p className="text-lg font-poppins mb-4 md:mb-0 text-center w-full md:w-auto">
          © 2025 Saud Hoath
        </p>

        {/* Right side → Links (desktop only) */}
         <nav className="hidden md:flex font-poppins space-x-6">
          <Link to="/about" className="hover:text-black">about</Link>
          <Link to="/portfolio" className="hover:text-black">portfolio</Link>
          <Link to="/resume" className="hover:text-black">resume</Link>
          <Link to="/CaseStudy" className="hover:text-black">caseStudy</Link>
        </nav>
      </div>

      {/* Semi-circle merged with footer */}
      <div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 
        w-24 h-12 bg-gray-100 rounded-t-full flex items-center justify-center 
        border-t border-l border-r border-gray-300 shadow-[0_-4px_15px_rgba(0,0,0,0.08)]
        cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        onClick={scrollToTop}
      >
        <ChevronUp
          size={70}
          className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
