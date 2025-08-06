"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa"

const navItems = [
  { name: "Home", href: "#hero", icon: <FaHome /> },
  { name: "About", href: "#about", icon: <FaUser /> },
  { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href) as HTMLElement
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.slice(1))
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0c1d] text-white backdrop-blur-md bg-opacity-90 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          Aman<span className="text-pink-500">.</span>
        </Link>

        {/* Nav Items */}
        <ul className="flex gap-6 items-center text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group relative flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
