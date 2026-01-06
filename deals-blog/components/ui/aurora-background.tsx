"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const TEXT = {
  label: "Aurora background"
};

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const AuroraBackground = ({ children, className }: AuroraBackgroundProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`.trim()} aria-label={TEXT.label}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-indigo-500/20" />
      <motion.div
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/30 blur-3xl"
        animate={reduceMotion ? {} : { y: [0, 20, 0], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl"
        animate={reduceMotion ? {} : { y: [0, -20, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
