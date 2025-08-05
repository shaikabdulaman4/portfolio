"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlask,
  SiFirebase,
} from "react-icons/si";

import RevealWrapper from "@/components/RevealWrapper";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 md:px-20 bg-[#0d0d0d] text-white relative"
    >
      {/* Glowing blur background */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <RevealWrapper>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            My Skills
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <RevealWrapper key={index} delay={index * 0.1}>
              <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-neutral-800 rounded-xl p-6 shadow-md backdrop-blur-md hover:-translate-y-2 hover:shadow-pink-500/30 transition-all duration-300">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="text-lg font-semibold text-gray-200">
                    {skill.name}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
