"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#hero", icon: <FaHome /> },
  { name: "About", href: "#about", icon: <FaUser /> },
  { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(
          navItems[i].href
        ) as HTMLElement;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`flex ${
        isMobile
          ? "flex-col items-center gap-6 mt-10"
          : "flex-row gap-4 sm:gap-6 items-center"
      }`}
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`group relative flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
              activeSection === item.href.slice(1)
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className={`${isMobile ? "text-2xl" : "text-lg"}`}>
              {item.icon}
            </span>
            <span className={`${isMobile ? "text-lg" : "text-sm md:text-base"}`}>
              {item.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0c1d] text-white backdrop-blur-md bg-opacity-90 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo + Name */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
          Aman<span className="text-pink-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">{renderNavLinks()}</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0c0c1d] backdrop-blur-md bg-opacity-95 shadow-lg border-t border-white/10 animate-fadeIn">
          {renderNavLinks(true)}
        </div>
      )}
    </nav>
  );
}
