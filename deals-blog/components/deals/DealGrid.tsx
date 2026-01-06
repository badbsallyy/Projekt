"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import type { Deal } from "@/types";
import { DealCard } from "@/components/deals/DealCard";

interface DealGridProps {
  deals: Deal[];
}

export const DealGrid = ({ deals }: DealGridProps) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {deals.map((deal) => (
      <FadeInCard key={deal.id}>
        <DealCard deal={deal} />
      </FadeInCard>
    ))}
  </div>
);

const FadeInCard = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
