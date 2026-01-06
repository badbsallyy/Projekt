import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { MovingBorderButton } from "@/components/ui";
import { cn } from "@/lib/utils";

const TEXT = {
  aboutTitle: "Über uns",
  aboutText:
    "Wir kuratieren täglich die besten Deals aus Deutschland und zeigen dir transparente Preisvorteile, damit du smarter einkaufen kannst.",
  quickLinks: "Quick Links",
  newsletterTitle: "Newsletter",
  newsletterText: "Erhalte exklusive Deals direkt in dein Postfach.",
  newsletterPlaceholder: "E-Mail-Adresse",
  newsletterCta: "Jetzt abonnieren",
  imprint: "Impressum",
  privacy: "Datenschutz",
  copyright: "© 2024 DealFlow. Alle Rechte vorbehalten."
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Deals", href: "/deals" },
  { label: "Blog", href: "/blog" }
];

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin }
];

const inputContainerClass = cn(
  "relative overflow-hidden rounded-full border border-white/10 bg-slate-950/80 p-[2px]"
);

export const Footer = () => (
  <footer className="mt-24 border-t border-white/10 bg-slate-950/90">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold text-white">{TEXT.aboutTitle}</h3>
        <p className="mt-4 text-sm text-slate-300">{TEXT.aboutText}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{TEXT.quickLinks}</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{TEXT.newsletterTitle}</h3>
        <p className="mt-4 text-sm text-slate-300">{TEXT.newsletterText}</p>
        <div className="mt-4 flex flex-col gap-3">
          <div className={inputContainerClass}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-indigo-500/40 to-emerald-400/40 bg-[length:200%_200%] animate-shimmer" />
            <input
              type="email"
              placeholder={TEXT.newsletterPlaceholder}
              className="relative z-10 w-full rounded-full bg-slate-950/90 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <MovingBorderButton type="button" className="w-full">
            {TEXT.newsletterCta}
          </MovingBorderButton>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-400">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <span>{TEXT.copyright}</span>
        <div className="flex items-center gap-4">
          <Link href="/impressum" className="hover:text-white">
            {TEXT.imprint}
          </Link>
          <Link href="/datenschutz" className="hover:text-white">
            {TEXT.privacy}
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
