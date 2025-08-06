'use client'

import React from 'react'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'
import RevealWrapper from '@/components/RevealWrapper'
import Image from 'next/image'

export default function ExperienceSection() {
  const experiences = [
    {
      icon: <FaBriefcase className="text-pink-400 text-3xl" />,
      role: 'Process Associate',
      company: 'Genpact India Pvt Ltd',
      duration: 'Dec 2024 – Present',
      logo: '/logos/genpact.png',
      responsibilities: [
        'Conduct quality checks and validations on processed data to ensure accuracy and compliance with client requirements.',
        'Collaborate with cross-functional teams to identify discrepancies and implement corrective actions.',
        'Utilize internal tools and web applications to monitor data flow and maintain process integrity.',
      ],
    },
    {
      icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
      role: 'Full Stack Developer (Intern)',
      company: 'EkaLavya (Fourth Rev Education), Hyderabad',
      duration: 'May 2023 – Mar 2024',
      logo: '/logos/ekalavya.png',
      responsibilities: [
        'Developed an integrated ERP platform with features like user management, course and grading modules, and LMS integration.',
        'Tech Stack: Java, JavaScript, HTML, CSS, MySQL, Vue.js, TypeScript, Nuxt.js.',
        'Involved in all phases of the SDLC including design, development, testing, and deployment.',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="relative w-full py-20 px-6 md:px-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto z-10">
        <RevealWrapper>
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-center mb-12">
            Professional Experience
          </h3>
        </RevealWrapper>


        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <RevealWrapper key={index} delay={index * 0.2}>
              <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:bg-white/10 transition duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  {/* Logo */}
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full border border-white/10"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                </div>

                <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* Neon Background Blur Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-yellow-500 rounded-full blur-[100px] opacity-20 -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[100px] opacity-20 -z-10" />
    </section>
  )
}
