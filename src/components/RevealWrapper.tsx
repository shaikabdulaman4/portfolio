"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function RevealWrapper({
  children,
  delay = 0,
  direction = "up",
}: RevealWrapperProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "up"
          ? 15
          : direction === "down"
          ? -15
          : 0,
      x:
        direction === "left"
          ? 15
          : direction === "right"
          ? -15
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
