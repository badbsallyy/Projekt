"use client"

import { cn } from "@/lib/utils"

type Category = "all" | "tech" | "haushalt" | "fashion" | "gaming"

type CategoryFilterProps = {
  selected: Category
  onChange: (category: Category) => void
}

const categories: { label: string; value: Category }[] = [
  { label: "Alle", value: "all" },
  { label: "Tech", value: "tech" },
  { label: "Haushalt", value: "haushalt" },
  { label: "Fashion", value: "fashion" },
  { label: "Gaming", value: "gaming" },
]

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onChange(category.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            selected === category.value
              ? "border-white/20 bg-white/15 text-white"
              : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
