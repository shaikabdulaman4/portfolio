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
      className="min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h6 className="text-4xl md:text-6xl font-bold text-white">
            <Typewriter
              words={[
                "Hello! Iam Aman",
                'Front-End Developer',
                'Web Enthusiast',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h6>
          <div className="flex gap-4 mt-6">
            <a
              href="/Shaik_Abdul_Aman_Resume.pdf"
              download
              className="px-6 py-2 rounded-full bg-blue-600 hover:bg-white hover:text-black transition"
            >
              Get Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
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
          className="flex justify-center relative z-10"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-3xl animate-pulse rounded-xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-xl z-0" />

            {/* Profile Image with bottom blend */}
            <div className="relative w-[360px] h-[360px] overflow-hidden rounded-xl">
              <Image
                src="/profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="object-top"
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
