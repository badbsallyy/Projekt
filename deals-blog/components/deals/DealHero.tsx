"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AuroraBackground, MovingBorderButton, Sparkles } from "@/components/ui";

const TEXT = {
  heading: "Die besten Deals des Tages",
  subheading: "Täglich kuratierte Rabatte mit echtem Mehrwert",
  cta: "Jetzt Deals entdecken"
};

export const DealHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <AuroraBackground className="rounded-b-[40px]">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-white md:text-6xl"
        >
          {TEXT.heading}
        </motion.h1>
        <Sparkles className="text-lg text-slate-200 md:text-xl">
          {TEXT.subheading}
        </Sparkles>
        <Link href="#deal-section" className="mt-4">
          <MovingBorderButton className={reduceMotion ? "" : "animate-float"}>
            {TEXT.cta}
          </MovingBorderButton>
        </Link>
      </section>
    </AuroraBackground>
  );
};
