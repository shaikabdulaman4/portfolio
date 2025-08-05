'use client';

import React from 'react';

export default function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'MLR Institute of Technology, Hyderabad',
      duration: '2020 – 2023',
      result: 'CGPA: 6.9 / 10',
      highlights: [
        'Final Year Project: Electronic Health Records using Attribute-Based Encryption on Cloud',
      ],
    },
    {
      degree: 'Diploma - Computer Engineering',
      institution: 'Govt. Polytechnic College, Nizamabad',
      duration: '2017 – 2020',
      result: 'Percentage: 68.42%',
    },
    {
      degree: 'SSC',
      institution: 'Mother Theresa High School, Balkonda',
      duration: '2016 – 2017',
      result: 'GPA: 8.8 / 10',
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 md:px-20 bg-[#0d0d0d] text-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white relative inline-block">
          <span className="relative z-10">Education</span>
          <span className="absolute inset-0 bg-pink-500 blur-xl opacity-30 rounded-lg -z-10"></span>
        </h2>

        <div className="space-y-10">
          {educationList.map((edu, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-semibold text-pink-400">
                {edu.degree}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {edu.institution}
              </p>
              <p className="text-sm md:text-base text-gray-400">
                {edu.duration} | {edu.result}
              </p>
              {edu.highlights && (
                <ul className="list-disc pl-6 mt-2 text-gray-400">
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
