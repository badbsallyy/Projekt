import Link from "next/link"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tech", href: "/#tech" },
  { label: "Haushalt", href: "/#haushalt" },
  { label: "Fashion", href: "/#fashion" },
  { label: "Gaming", href: "/#gaming" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-white transition hover:text-slate-200"
        >
          DealDraft
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
          Deals
        </div>
      </div>
    </header>
  )
}
