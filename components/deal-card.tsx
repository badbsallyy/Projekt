import Link from "next/link"
import { Deal } from "@/data/deals"
import { cn } from "@/lib/utils"

const categoryStyles: Record<Deal["category"], string> = {
  tech: "bg-sky-500/15 text-sky-200 border-sky-400/30",
  haushalt: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  fashion: "bg-pink-500/15 text-pink-200 border-pink-400/30",
  gaming: "bg-violet-500/15 text-violet-200 border-violet-400/30",
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value)
}

export default function DealCard({ deal }: { deal: Deal }) {
  const discount = Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100)

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.title}
          className="h-52 w-full object-cover"
        />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            categoryStyles[deal.category]
          )}
        >
          {deal.category}
        </span>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-slate-100">
            {deal.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300 line-clamp-2">
            {deal.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold text-white">
              {formatPrice(deal.price)}
            </div>
            <div className="text-sm text-slate-400">
              <span className="line-through">{formatPrice(deal.oldPrice)}</span>
              <span className="ml-2 text-emerald-300">-{discount}%</span>
            </div>
          </div>
          <Link
            href={`/deals/${deal.slug}`}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20"
          >
            Deal ansehen
          </Link>
        </div>
      </div>
    </article>
  )
}
