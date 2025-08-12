'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left - Name & Year */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Shaik Abdul Aman. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-6 text-xl sm:text-lg">
          <a
            href="https://github.com/shaikabdulaman4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-abdul-aman-312582222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shaikabdulaman18@gmail.com"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/iaman_shaik?igsh=MWpzN3N4bDEyejNpdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
