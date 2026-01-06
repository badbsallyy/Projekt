import type { Metadata } from "next";

const TEXT = {
  title: "Impressum",
  subtitle: "Angaben gemäß § 5 TMG",
  company: "DealFlow GmbH",
  address: "Musterstraße 12, 10115 Berlin",
  contact: "kontakt@dealflow.de"
};

export const metadata: Metadata = {
  title: "DealFlow | Impressum",
  description: "Impressum für DealFlow."
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">{TEXT.title}</h1>
      <p className="mt-4 text-sm text-slate-300">{TEXT.subtitle}</p>
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
        <p>{TEXT.company}</p>
        <p>{TEXT.address}</p>
        <p>{TEXT.contact}</p>
      </div>
    </div>
  );
}
