import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./navbar.css";
import saoodlogo from "../assets/sad@3x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);      // animation state
  const [showMenu, setShowMenu] = useState(false);  // DOM mount state

  const toggleMenu = () => {
    if (isOpen) {
      // 👇 pehle animation chalne do
      setIsOpen(false);
      setTimeout(() => setShowMenu(false), 500); // 500ms = CSS transition duration
    } else {
      setShowMenu(true); // pehle DOM me add karo
      setTimeout(() => setIsOpen(true), 5); // chhota delay so CSS trigger ho
    }
  };

  return (
    <nav className="font-poppins bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      {/* Logo */}
      <div className="text-3xl font-bold z-50">
        <a href="/" className="flex items-center space-x-2">
          <img
            src={saoodlogo}// ← yaha apna logo ka path do (example: /assets/logo.svg)
            alt="Logo"
            className="max-h-8 w-auto sm:max-h-10 md:max-h-12 object-contain"
          />
        </a>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium relative">
        <li>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-gray-400" : "hover:text-gray-200"
          }>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) =>
            isActive ? "text-gray-400" : "hover:text-gray-200"
          }>
            portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/CaseStudy" className={({ isActive }) =>
            isActive ? "text-gray-400" : "hover:text-gray-200"
          }>
            CaseStudy
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/resume" className={({ isActive }) =>
            isActive ? "text-gray-400" : "hover:text-gray-200"
          }>
            resume
          </NavLink>
        </li>
      </ul>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex space-x-4 text-xl">
        <a href="https://www.linkedin.com/in/saood-hoath/"><FaLinkedin className="hover:text-gray-200 cursor-pointer" /></a>
        <a href="https://www.instagram.com/hothalbaloushi?igsh=MTJ5dG9wZm5lbTY2MA=="><FaInstagram className="hover:text-gray-200 cursor-pointer" /></a>
        <a
          href="https://wa.me/923072264628"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
        </a>
      </div>

      {/* Hamburger (Mobile only) */}
      <div className="md:hidden z-50">
        <FiMenu
          className="text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className={`mobile-dropdown ${isOpen ? "open" : ""}`}>
          <ul className="flex flex-col divide-y divide-gray-700 text-center">
            <li>
              <NavLink to="/about" onClick={toggleMenu} className="block py-4 hover:text-gray-300">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={toggleMenu} className="block py-4 hover:text-gray-300">
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/CaseStudy" onClick={toggleMenu} className="block py-4 hover:text-gray-300">
                CaseStudy
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={toggleMenu} className="block py-4 hover:text-gray-300">
                resume
              </NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 py-4 text-2xl">
        <a href="https://www.linkedin.com/in/saood-hoath/"><FaLinkedin className="hover:text-gray-200 cursor-pointer" /></a>
        <a href="https://www.instagram.com/hothalbaloushi?igsh=MTJ5dG9wZm5lbTY2MA=="><FaInstagram className="hover:text-gray-200 cursor-pointer" /></a>
        <a
          href="https://wa.me/923072264628"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
        </a>
      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
