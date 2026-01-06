"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getRemainingTime } from "@/lib/utils";

interface DealCountdownProps {
  expiryDate: string;
}

const TEXT = {
  title: "Deal endet in"
};

export const DealCountdown = ({ expiryDate }: DealCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime(expiryDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getRemainingTime(expiryDate));
    }, 60000);

    return () => window.clearInterval(interval);
  }, [expiryDate]);

  const items = [
    { label: "Tage", value: timeLeft.days },
    { label: "Stunden", value: timeLeft.hours },
    { label: "Minuten", value: timeLeft.minutes }
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{TEXT.title}</p>
      <div className="mt-4 flex flex-wrap gap-4">
        {items.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex min-w-[90px] flex-col items-center rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3"
          >
            <span className="text-2xl font-semibold text-white">{item.value}</span>
            <span className="text-xs text-slate-400">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
