import type { ReactNode } from "react";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundGradient = ({ children, className }: BackgroundGradientProps) => (
  <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 ${className ?? ""}`.trim()}>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-indigo-500/20" />
    <div className="relative z-10">{children}</div>
  </div>
);
