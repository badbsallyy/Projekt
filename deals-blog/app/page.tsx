import type { Metadata } from "next";
import { DealHero, DealGrid } from "@/components/deals";
import { featuredDeals } from "@/lib/data/deals";
import { BackgroundGradient } from "@/components/ui";

const TEXT = {
  dealsTitle: "Featured Deals",
  dealsSubtitle: "Sechs handverlesene Angebote mit echtem Preisvorteil"
};

export const metadata: Metadata = {
  title: "DealFlow | Die besten Deals des Tages",
  description: "Hero-Deals, Preisvergleiche und Top-Angebote für deinen Alltag."
};

export default function HomePage() {
  return (
    <div>
      <DealHero />
      <section id="deal-section" className="mx-auto max-w-6xl px-6 py-16">
        <BackgroundGradient className="p-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">{TEXT.dealsTitle}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{TEXT.dealsSubtitle}</h2>
          </div>
          <div className="mt-10">
            <DealGrid deals={featuredDeals} />
          </div>
        </BackgroundGradient>
      </section>
    </div>
  );
}
