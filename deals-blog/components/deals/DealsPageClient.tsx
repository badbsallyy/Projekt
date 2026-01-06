"use client";

import { useMemo, useState } from "react";
import { ArrowUp } from "lucide-react";
import { DealGrid } from "@/components/deals/DealGrid";
import { BackgroundGradient, Tabs } from "@/components/ui";
import { deals } from "@/lib/data/deals";
import { cn } from "@/lib/utils";

const TEXT = {
  title: "Alle Deals",
  subtitle: "Filtere nach Kategorien oder sortiere nach dem besten Rabatt.",
  backToTop: "Nach oben"
};

const CATEGORY_TABS = [
  { label: "Alle Kategorien", value: "Alle" },
  { label: "Elektronik", value: "Elektronik" },
  { label: "Mode", value: "Mode" },
  { label: "Haushalt", value: "Haushalt" },
  { label: "Sport", value: "Sport" },
  { label: "Gaming", value: "Gaming" }
];

const SORT_TABS = [
  { label: "Neueste", value: "newest" },
  { label: "Beste Rabatte", value: "discount" },
  { label: "Ablaufend", value: "expiring" }
];

const sortDeals = (sort: string) => {
  const copy = [...deals];
  if (sort === "discount") {
    return copy.sort((a, b) => b.discount - a.discount);
  }
  if (sort === "expiring") {
    return copy.sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());
  }
  return copy.sort((a, b) => b.id.localeCompare(a.id));
};

export const DealsPageClient = () => {
  const [category, setCategory] = useState<string>("Alle");
  const [sort, setSort] = useState<string>("newest");

  const visibleDeals = useMemo(() => {
    const sorted = sortDeals(sort);
    if (category === "Alle") {
      return sorted;
    }
    return sorted.filter((deal) => deal.category === category);
  }, [category, sort]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <BackgroundGradient className="p-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">{TEXT.title}</p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{TEXT.subtitle}</h1>
        </div>
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Tabs tabs={CATEGORY_TABS} active={category} onChange={setCategory} />
          <Tabs tabs={SORT_TABS} active={sort} onChange={setSort} />
        </div>
        <div className="mt-10">
          <DealGrid deals={visibleDeals} />
        </div>
      </BackgroundGradient>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 flex items-center gap-2 rounded-full border border-emerald-400/40",
          "bg-slate-950/90 px-4 py-3 text-sm text-emerald-200 shadow-lg",
          "transition hover:bg-emerald-500/10"
        )}
      >
        <ArrowUp className="h-4 w-4" />
        {TEXT.backToTop}
      </button>
    </div>
  );
};
