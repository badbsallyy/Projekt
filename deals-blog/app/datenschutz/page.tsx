import type { Metadata } from "next";

const TEXT = {
  title: "Datenschutz",
  intro:
    "Der Schutz deiner Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorschriften.",
  details:
    "Beim Besuch unserer Website speichern wir technische Informationen wie Browsertyp, Uhrzeit und aufgerufene Seiten, um die Performance zu verbessern. Wir verwenden keine externen Tracking-Tools und geben Daten nicht an Dritte weiter.",
  contact: "Bei Fragen zum Datenschutz schreibe uns an datenschutz@dealflow.de."
};

export const metadata: Metadata = {
  title: "DealFlow | Datenschutz",
  description: "Datenschutzerklärung für DealFlow."
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">{TEXT.title}</h1>
      <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
        <p>{TEXT.intro}</p>
        <p>{TEXT.details}</p>
        <p>{TEXT.contact}</p>
      </div>
    </div>
  );
}
