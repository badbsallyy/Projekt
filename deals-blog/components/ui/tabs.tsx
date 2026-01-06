"use client";

import { cn } from "@/lib/utils";

interface TabItem {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: TabItem[];
  active: string;
  onChange: (value: string) => void;
}

export const Tabs = ({ tabs, active, onChange }: TabsProps) => (
  <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 p-2">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        onClick={() => onChange(tab.value)}
        className={cn(
          "rounded-full px-4 py-2 text-sm transition",
          active === tab.value
            ? "bg-emerald-500/20 text-emerald-200"
            : "text-slate-300 hover:text-white"
        )}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
