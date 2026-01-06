import Link from "next/link"
import { notFound } from "next/navigation"
import { deals } from "@/data/deals"

function formatPrice(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value)
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "long",
  }).format(new Date(value))
}

type DealDetailPageProps = {
  params: { slug: string }
}

export default function DealDetailPage({ params }: DealDetailPageProps) {
  const deal = deals.find((item) => item.slug === params.slug)

  if (!deal) {
    notFound()
  }

  const discount = Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100)

  return (
    <div className="space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
      >
        <span className="text-lg">←</span>
        Zurück zu den Deals
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <img
            src={deal.image}
            alt={deal.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              {deal.category}
            </div>
            <h1 className="text-3xl font-semibold text-white">{deal.title}</h1>
            <p className="text-sm text-slate-400">
              Veröffentlicht am {formatDate(deal.createdAt)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-semibold text-white">
              {formatPrice(deal.price)}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="line-through">{formatPrice(deal.oldPrice)}</span>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                {discount}% sparen
              </span>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed">
            {deal.description}
          </p>

          <a
            href={deal.affiliateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20"
          >
            Zum Anbieter
          </a>
        </div>
      </div>
    </div>
  )
}
