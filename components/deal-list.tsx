"use client"

import { useMemo, useState } from "react"
import { Deal } from "@/data/deals"
import CategoryFilter from "@/components/category-filter"
import DealCard from "@/components/deal-card"

type Category = "all" | Deal["category"]

type DealListProps = {
  deals: Deal[]
}

export default function DealList({ deals }: DealListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const filteredDeals = useMemo(() => {
    const sorted = [...deals].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    if (selectedCategory === "all") {
      return sorted
    }

    return sorted.filter((deal) => deal.category === selectedCategory)
  }, [deals, selectedCategory])

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Aktuelle Deals</h2>
          <p className="text-sm text-slate-300">
            Neueste Deals zuerst, handverlesen für schnelle Entscheidungen.
          </p>
        </div>
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      {filteredDeals.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center text-sm text-slate-300">
          Für diese Kategorie sind aktuell keine Deals verfügbar.
        </div>
      ) : null}
    </section>
  )
}
