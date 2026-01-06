"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  children: ReactNode;
  className?: string;
}

export const CardHoverEffect = ({ children, className }: CardHoverEffectProps) => (
  <motion.div
    className={cn(
      "relative h-full rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition-shadow",
      "hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
      "transform-gpu",
      className
    )}
    whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
    transition={{ type: "spring", stiffness: 200, damping: 18 }}
  >
    <div className="relative z-10">{children}</div>
  </motion.div>
);
