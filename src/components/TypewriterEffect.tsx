"use client";

import { useEffect, useState } from "react";

export const TypewriterEffect = () => {
  const texts = ["Web Developer", "UI/UX Enthusiast", "Tech Explorer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (forward && subIndex === texts[index].length) {
      setTimeout(() => setForward(false), 1500); // pause before deleting
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 120 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  return (
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
      I’m a{" "}
      <span className="text-cyan-400">
        {texts[index].substring(0, subIndex)}
      </span>
      {blink && <span className="text-cyan-400">|</span>}
    </h2>
  );
};
