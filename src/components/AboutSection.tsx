'use client'

import React from 'react'
import RevealWrapper from '@/components/RevealWrapper'
import { GiSchoolBag } from "react-icons/gi";
import { FaGraduationCap } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

export default function AboutSection() {
  const educationList = [
    {
      icon: <FaGraduationCap className="text-sky-400 text-4xl" />,
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'MLR Institute of Technology, Hyderabad',
      duration: '2020 – 2023',
      result: 'CGPA: 6.9 / 10',
      highlights: [
        'Final Year Project: Electronic Health Records using Attribute-Based Encryption on Cloud',
      ],
    },
    {
      icon: <MdComputer className="text-indigo-400 text-4xl" />,
      degree: 'Diploma - Computer Engineering',
      institution: 'Govt. Polytechnic College, Nizamabad',
      duration: '2017 – 2020',
      result: 'Percentage: 68.42%',
    },
    {
      icon: <GiSchoolBag className="text-emerald-400 text-4xl" />,
      degree: 'SSC',
      institution: 'Mother Theresa High School, Balkonda',
      duration: '2016 – 2017',
      result: 'GPA: 8.8 / 10',
    },
  ]

  return (
    <section
      id="about"
      className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-16 sm:py-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* ABOUT SECTION */}
        <RevealWrapper>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse text-center">
            Who Am I?
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            I'm <span className="font-semibold text-white">Shaik Abdul Aman</span>, a passionate full-stack web developer who transforms pixels into powerful digital experiences. With a deep love for futuristic design, clean code, and UI detail, I bring web interfaces to life that not only look stunning but feel unforgettable.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <p className="text-sm sm:text-md md:text-lg text-gray-400 leading-relaxed text-justify">
            My stack includes <span className="text-white">Next.js</span>,{' '}
            <span className="text-white">React</span>,{' '}
            <span className="text-white">Tailwind CSS</span>,{' '}
            <span className="text-white">Node.js</span>, and{' '}
            <span className="text-white">MongoDB</span>. I love crafting fast, futuristic, and responsive products that users enjoy.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.6}>
          <div className="mt-8 flex justify-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-pink-500/50 cursor-default text-center">
              Building the future, one pixel at a time.
            </div>
          </div>
        </RevealWrapper>

        {/* EDUCATION SECTION */}
        <RevealWrapper delay={0.8}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-16 sm:mt-24 mb-10 text-white text-center relative inline-block">
            <span className="relative z-10">Education</span>
            <span className="absolute inset-0 bg-sky-500 blur-xl opacity-30 rounded-lg -z-10"></span>
          </h3>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="group relative h-auto min-h-[300px] flex flex-col items-center text-center p-6 overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center items-center w-full">
                  {edu.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-2">
                  {edu.duration} | {edu.result}
                </p>

                {edu.highlights && (
                  <ul className="list-disc text-left text-sm text-gray-400 mt-2 max-h-28 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {edu.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {/* Neon Blur Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[250px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[250px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
    </section>
  )
}
