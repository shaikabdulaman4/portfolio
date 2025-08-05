"use client";

import { useEffect, useState } from "react";

export const TypewriterEffect = () => {
  const texts = ["Web Developer", "UI/UX Enthusiast", "Tech Explorer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < texts[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setForward(false);
          setTimeout(() => {}, 1000);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, texts]);

  return (
    <h2 className="text-xl md:text-2xl font-medium text-gray-300">
      I’m a <span className="text-cyan-400">{texts[index].substring(0, subIndex)}</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </h2>
  );
};
