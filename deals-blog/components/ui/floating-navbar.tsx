"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingNavbarProps {
  children: ReactNode;
  className?: string;
}

export const FloatingNavbar = ({ children, className }: FloatingNavbarProps) => {
  return (
    <motion.div
      className={cn(
        "sticky top-4 z-50 mx-auto w-[95%] rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur",
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        className
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
