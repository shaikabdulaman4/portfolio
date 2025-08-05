"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero isLoaded={isLoaded} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
