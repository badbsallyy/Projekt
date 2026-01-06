import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
  <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>{children}</div>
);

export const BentoGridItem = ({ title, description, icon, className }: BentoGridItemProps) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6",
      "shadow-[0_0_30px_rgba(15,23,42,0.2)]",
      className
    )}
  >
    <div className="flex items-center gap-3 text-emerald-300">
      {icon}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-300">{description}</p>
  </div>
);
