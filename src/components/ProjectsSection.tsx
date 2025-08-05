"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import RevealWrapper from "@/components/RevealWrapper";

const projects = [
  {
    id: "ats",
    title: "ATS Resume Analyzer",
    description:
      "An AI-powered resume analyzer that checks ATS compatibility and highlights improvements with modern UI and 3D elements.",
    tech: ["Next.js", "Flask", "Tailwind", "OpenAI"],
    link: "#ats",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio to showcase projects, skills, and resume with a sleek, futuristic design using modern frontend tech.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#portfolio",
  },
  {
    id: "ekalavya",
    title: "EkaLavya Dashboard",
    description:
      "Feature-rich admin panel built during internship to manage users, reports, and tasks with responsive design.",
    tech: ["Vue", "Java", "Nuxt", "Firebase"],
    link: "#ekalavya",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
    >
      {/* Glowing Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20 z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[120px] opacity-20 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <RevealWrapper direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            My Projects
          </h2>
        </RevealWrapper>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <RevealWrapper key={index} delay={index * 0.2}>
              <div className="relative">
                {/* Scroll anchor above each card */}
                <div id={project.id} className="scroll-mt-32 absolute -top-32" />

                <div className="group bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-neutral-800 rounded-xl p-6 transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/30 backdrop-blur-md">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-pink-600/10 text-pink-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-sm text-pink-400 hover:text-pink-300"
                  >
                    View Project <FiExternalLink className="mt-[2px]" />
                  </a>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
