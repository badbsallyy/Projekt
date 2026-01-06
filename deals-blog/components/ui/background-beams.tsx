"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface BackgroundBeamsProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundBeams = ({ children, className }: BackgroundBeamsProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`.trim()}>
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)]" />
      {!reduceMotion &&
        [
          \"left-[calc(50%-280px)]\",
          \"left-[calc(50%-140px)]\",
          \"left-[50%]\",
          \"left-[calc(50%+140px)]\",
          \"left-[calc(50%+280px)]\"
        ].map((position, index) => (
          <motion.span
            key={position}
            className={`absolute top-0 h-full w-px bg-gradient-to-b from-emerald-400/60 via-transparent to-transparent ${position}`}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
          />
        ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
