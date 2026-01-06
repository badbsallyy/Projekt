"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const MovingBorderButton = ({ children, className, ...props }: MovingBorderButtonProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition focus:outline-none",
        "bg-slate-950/80",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full p-[2px]">
        <motion.span
          className="absolute inset-0 rounded-full bg-[length:200%_200%] bg-gradient-to-r from-emerald-400 via-indigo-500 to-emerald-400"
          animate={
            reduceMotion
              ? {}
              : {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </span>
    </button>
  );
};
