import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DealCountdown } from "@/components/deals/DealCountdown";
import { DealCard } from "@/components/deals/DealCard";
import { BackgroundGradient, MovingBorderButton, Sparkles } from "@/components/ui";
import { deals } from "@/lib/data/deals";
import { formatPrice, formatDate } from "@/lib/utils";

const TEXT = {
  breadcrumbHome: "Home",
  breadcrumbDeals: "Deals",
  breadcrumbSeparator: "/",
  cta: "Zum Deal",
  similarTitle: "Ähnliche Deals",
  descriptionTitle: "Deal-Beschreibung",
  expiryLabel: "Ablaufdatum:",
  discountLabel: "Rabatt",
  descriptionParagraphs: [
    "Dieser Deal wurde von unserem Team geprüft und bietet einen klaren Preisvorteil gegenüber dem regulären Marktpreis. Wir achten auf transparente Produktdaten, faire Versandoptionen und eine nachvollziehbare Rabattstruktur, damit du ohne Risiko sparen kannst.",
    "Tipp: Setze ein Erinnerungsfenster im Kalender, damit du den Ablauf nicht verpasst. Viele Angebote sind nur in kleinen Stückzahlen verfügbar und können vorzeitig enden. Je früher du zuschlägst, desto höher ist die Chance, den Deal noch rechtzeitig zu sichern."
  ]
};

interface DealPageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: DealPageProps): Metadata => {
  const deal = deals.find((item) => item.slug === params.slug);
  if (!deal) {
    return {
      title: "Deal nicht gefunden",
      description: "Der angefragte Deal ist nicht verfügbar."
    };
  }

  return {
    title: `DealFlow | ${deal.title}`,
    description: deal.description,
    openGraph: {
      title: deal.title,
      description: deal.description,
      images: [deal.imageUrl]
    }
  };
};

export default function DealDetailPage({ params }: DealPageProps) {
  const deal = deals.find((item) => item.slug === params.slug);
  if (!deal) {
    notFound();
  }

  const similarDeals = deals.filter((item) => item.category === deal.category && item.id !== deal.id).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: deal.title,
    image: deal.imageUrl,
    description: deal.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: deal.salePrice,
      url: deal.affiliateLink,
      availability: "https://schema.org/InStock",
      priceValidUntil: deal.expiryDate
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: deal.rating,
      reviewCount: 124
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <nav className="text-xs text-slate-400">
        <Link href="/" className="hover:text-white">
          {TEXT.breadcrumbHome}
        </Link>
        <span className="px-2">{TEXT.breadcrumbSeparator}</span>
        <Link href="/deals" className="hover:text-white">
          {TEXT.breadcrumbDeals}
        </Link>
        <span className="px-2">{TEXT.breadcrumbSeparator}</span>
        <span>{deal.category}</span>
        <span className="px-2">{TEXT.breadcrumbSeparator}</span>
        <span className="text-slate-200">{deal.title}</span>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <BackgroundGradient className="p-6">
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </BackgroundGradient>
        <div className="space-y-6">
          <Sparkles className="text-3xl font-semibold text-white md:text-4xl">
            {deal.title}
          </Sparkles>
          <div className="flex flex-wrap items-end gap-4">
            <span className="text-sm text-slate-400 line-through">{formatPrice(deal.originalPrice)}</span>
            <span className="text-4xl font-semibold text-emerald-300">{formatPrice(deal.salePrice)}</span>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-200">
              {deal.discount}% {TEXT.discountLabel}
            </span>
          </div>
          <p className="text-sm text-slate-300">
            {TEXT.expiryLabel} {formatDate(deal.expiryDate)}
          </p>
          <Link href={deal.affiliateLink} target="_blank" rel="noreferrer" className="inline-block">
            <MovingBorderButton>{TEXT.cta}</MovingBorderButton>
          </Link>
          <DealCountdown expiryDate={deal.expiryDate} />
        </div>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-white">{TEXT.descriptionTitle}</h2>
        <p className="text-sm text-slate-300">{deal.description}</p>
        {TEXT.descriptionParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm text-slate-300">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-white">{TEXT.similarTitle}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {similarDeals.map((item) => (
            <DealCard key={item.id} deal={item} />
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
