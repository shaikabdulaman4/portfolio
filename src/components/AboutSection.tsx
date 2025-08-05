'use client'

import React from 'react'
import RevealWrapper from '@/components/RevealWrapper'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <RevealWrapper>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Who Am I?
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            I'm <span className="font-semibold text-white">Shaik Abdul Aman</span>, a
            passionate full-stack web developer who transforms pixels into powerful
            digital experiences. With a deep love for futuristic design, clean
            code, and UI detail, I bring web interfaces to life that not only
            look stunning but feel unforgettable.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <p className="text-md md:text-lg text-gray-400 leading-relaxed">
            My stack includes <span className="text-white">Next.js</span>,{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">Tailwind CSS</span>,{" "}
            <span className="text-white">Node.js</span>, and{" "}
            <span className="text-white">MongoDB</span>. I love crafting
            fast, futuristic, and responsive products that users enjoy.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.6}>
          <div className="mt-10">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-pink-500/50 cursor-default">
              Building the future, one pixel at a time.
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* Neon Blur Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
    </section>
  )
}
