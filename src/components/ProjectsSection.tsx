'use client';

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import RevealWrapper from '@/components/RevealWrapper';

const projects = [
  {
    id: 'ekalavya',
    title: 'EkaLavya Dashboard',
    description: 'Feature-rich admin panel built during internship to manage users, reports, and tasks with responsive design.',
    tech: ['Vue', 'Java', 'Nuxt', 'Firebase'],
    link: 'https://ekalavya-dashboard.vercel.app',
  },
  {
    id: 'ats',
    title: 'ATS Resume Analyzer',
    description: 'An AI-powered resume analyzer that checks ATS compatibility and highlights improvements with modern UI and 3D elements.',
    tech: ['Next.js', 'Flask', 'Tailwind', 'OpenAI'],
    link: 'https://ats-resume.vercel.app',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing projects, experience, and skills using modern Next.js and Tailwind design.',
    tech: ['Next.js', 'React', 'Tailwind'],
    link: 'https://shaikabdulaman.vercel.app',
  },
  {
    id: 'ehr',
    title: 'EHR Using Attribute Based Encryption in Cloud',
    description: 'Secure and efficient Electronic Health Record management system using attribute-based encryption in cloud computing.',
    tech: ['Java', 'Cloud', 'Security'],
    link: 'https://ats-resume.vercel.app',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full min-h-screen py-20 px-6 sm:px-10 bg-black text-white">
      <RevealWrapper>
        <h2 className="text-center text-5xl font-bold mb-16 text-pink-500">My Projects</h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-neutral-800 rounded-xl p-6 hover:-translate-y-2 transition-transform hover:shadow-lg hover:shadow-pink-500/30 h-full"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-xs rounded-full bg-pink-900/50 text-pink-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-400 hover:text-pink-300 mt-4 inline-flex items-center gap-1"
              >
                View Project <FiExternalLink />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Padding to fill space and prevent footer overlap */}
      <div className="mt-24" />
    </section>
  );
};

export default ProjectsSection;
