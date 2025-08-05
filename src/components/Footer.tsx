'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Name & Year */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shaik Abdul Aman. All rights reserved.</p>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shaikabdulaman18@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
