"use client";

import { motion } from "framer-motion";
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
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
