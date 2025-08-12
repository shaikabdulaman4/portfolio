'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

interface HeroProps {
  isLoaded: boolean;
}

export default function Hero({ isLoaded }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h6 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            <Typewriter
              words={[
                "Hello! I am Aman",
                "Front-End Developer",
                "Web Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h6>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/Shaik_Abdul_Aman_Resume.pdf"
              download
              className="px-6 py-2 text-sm sm:text-base rounded-full bg-blue-600 hover:bg-white hover:text-black transition duration-300"
            >
              Get Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 text-sm sm:text-base rounded-full border border-white hover:bg-white hover:text-black transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end relative z-10"
        >
          <div className="relative group w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-3xl animate-pulse rounded-xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-xl z-0" />

            {/* Profile Image */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Bottom Gradient Blend */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
