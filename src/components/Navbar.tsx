"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href) as HTMLElement;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0c1d] text-white backdrop-blur-md bg-opacity-80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
            Aman<span className="text-pink-500">.</span>
        </Link>

        {/* Navigation */}
        <ul className="flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group relative px-4 py-2 transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {item.name}
                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                    activeSection === item.href.slice(1) ? "scale-x-100" : ""
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
