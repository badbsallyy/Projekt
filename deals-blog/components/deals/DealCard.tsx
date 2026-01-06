import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Deal } from "@/types";
import { CardHoverEffect } from "@/components/ui";
import { formatPrice } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
}

const TEXT = {
  cta: "Deal ansehen",
  ratingLabel: "Bewertung"
};

export const DealCard = ({ deal }: DealCardProps) => (
  <CardHoverEffect className="flex h-full flex-col gap-4">
    <div className="relative h-44 w-full overflow-hidden rounded-2xl">
      <Image
        src={deal.imageUrl}
        alt={deal.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{deal.category}</span>
        <span>{deal.shopName}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{deal.title}</h3>
      <p className="text-sm text-slate-300">{deal.description}</p>
    </div>
    <div className="flex items-center justify-between border-t border-white/10 pt-4">
      <div>
        <p className="text-xs text-slate-400 line-through">{formatPrice(deal.originalPrice)}</p>
        <p className="text-lg font-semibold text-emerald-300">{formatPrice(deal.salePrice)}</p>
      </div>
      <div className="flex items-center gap-1 text-emerald-300">
        <Star className="h-4 w-4 fill-emerald-300" />
        <span className="text-sm">{TEXT.ratingLabel} {deal.rating}/5</span>
      </div>
    </div>
    <Link
      href={`/deals/${deal.slug}`}
      className="mt-2 inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/10"
    >
      {TEXT.cta}
    </Link>
  </CardHoverEffect>
);
