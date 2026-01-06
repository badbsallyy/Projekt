"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SparklesProps {
  children: ReactNode;
  className?: string;
}

const SPARKLES = [
  { className: "top-[10%] left-[20%]", delay: 0 },
  { className: "top-[60%] left-[10%]", delay: 1.2 },
  { className: "top-[30%] left-[80%]", delay: 0.6 },
  { className: "top-[75%] left-[70%]", delay: 1.8 }
];

export const Sparkles = ({ children, className }: SparklesProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <span className={`relative inline-flex items-center ${className ?? ""}`.trim()}>
      <span className="relative z-10">{children}</span>
      {!reduceMotion &&
        SPARKLES.map((sparkle) => (
          <motion.span
            key={sparkle.className}
            className={`absolute h-2 w-2 rounded-full bg-emerald-400/70 ${sparkle.className}`}
            animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: sparkle.delay }}
          />
        ))}
    </span>
  );
};
