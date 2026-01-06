import type { Metadata } from "next";
import { DealsPageClient } from "@/components/deals";

export const metadata: Metadata = {
  title: "DealFlow | Alle Deals",
  description: "Entdecke alle Angebote, filtere nach Kategorien und finde die besten Rabatte."
};

export default function DealsPage() {
  return <DealsPageClient />;
}
