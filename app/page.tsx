import DealList from "@/components/deal-list"
import { deals } from "@/data/deals"

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_50%)]" />
        <div className="relative z-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Täglich neue Deals
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Finde die besten Angebote für Technik, Haushalt und Lifestyle.
            </h1>
            <p className="text-base text-slate-300">
              DealDraft ist dein minimalistischer Deal-Blog: schnell, klar und mit
              Fokus auf das Wesentliche.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Ohne Community
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Keine Accounts
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Klare Deals
              </span>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Wie es funktioniert</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>Browse aktuelle Deals nach Kategorie.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>Lies die wichtigsten Infos in Sekunden.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <span>Ein Klick bringt dich direkt zum Anbieter.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        <div className="grid gap-4">
          <span id="tech" className="sr-only" />
          <span id="haushalt" className="sr-only" />
          <span id="fashion" className="sr-only" />
          <span id="gaming" className="sr-only" />
        </div>
        <DealList deals={deals} />
      </div>
    </div>
  )
}
