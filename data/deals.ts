export type Deal = {
  id: string
  title: string
  slug: string
  description: string
  price: number
  oldPrice: number
  category: "tech" | "haushalt" | "fashion" | "gaming"
  image: string
  createdAt: string
  affiliateUrl: string
}

export const deals: Deal[] = [
  {
    id: "deal-001",
    title: "UltraLite Noise Cancelling Kopfhörer",
    slug: "ultralite-noise-cancelling-kopfhoerer",
    description:
      "Die UltraLite Kopfhörer bieten aktives Noise Cancelling, 40 Stunden Akkulaufzeit und ein leichtes Design für den Alltag. Ideal fürs Pendeln, konzentriertes Arbeiten oder entspannte Musikabende.",
    price: 129.99,
    oldPrice: 199.99,
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1518441980704-5c3c1f6e2a9b?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-18",
    affiliateUrl: "https://example.com/deal/kopfhoerer",
  },
  {
    id: "deal-002",
    title: "Smart Home Steckdosen-Set (4er)",
    slug: "smart-home-steckdosen-set-4er",
    description:
      "Steuere Lampen und Geräte per App oder Sprachassistent. Die Steckdosen messen zusätzlich den Energieverbrauch und lassen sich nach Zeitplan schalten.",
    price: 34.9,
    oldPrice: 59.9,
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-21",
    affiliateUrl: "https://example.com/deal/steckdosen",
  },
  {
    id: "deal-003",
    title: "Premium Küchenmesser-Set aus Damaststahl",
    slug: "premium-kuechenmesser-set-damaststahl",
    description:
      "Ein vielseitiges 5-teiliges Messer-Set mit ergonomischem Griff und langlebiger Klinge. Für präzises Schneiden von Gemüse, Fleisch und Kräutern.",
    price: 89.0,
    oldPrice: 149.0,
    category: "haushalt",
    image:
      "https://images.unsplash.com/photo-1514516870926-206f2f6d99b5?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-17",
    affiliateUrl: "https://example.com/deal/messer",
  },
  {
    id: "deal-004",
    title: "Kabelloser Bodenreiniger mit Wassertank",
    slug: "kabelloser-bodenreiniger-mit-wassertank",
    description:
      "Der kabellose Bodenreiniger kombiniert Saugen und Wischen in einem Schritt. Mit separaten Tanks für Frisch- und Schmutzwasser.",
    price: 219.0,
    oldPrice: 299.0,
    category: "haushalt",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-14",
    affiliateUrl: "https://example.com/deal/bodenreiniger",
  },
  {
    id: "deal-005",
    title: "Minimalistischer Strickpullover",
    slug: "minimalistischer-strickpullover",
    description:
      "Weicher Baumwollmix mit modernem Schnitt. Der Strickpullover lässt sich vielseitig kombinieren und ist perfekt für kühle Abende.",
    price: 39.9,
    oldPrice: 69.9,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-20",
    affiliateUrl: "https://example.com/deal/strickpullover",
  },
  {
    id: "deal-006",
    title: "Sneaker aus recycelten Materialien",
    slug: "sneaker-aus-recycelten-materialien",
    description:
      "Leichte Sneaker mit atmungsaktivem Obermaterial und komfortabler Sohle. Nachhaltig produziert und alltagstauglich.",
    price: 74.0,
    oldPrice: 119.0,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c6d4c42?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-16",
    affiliateUrl: "https://example.com/deal/sneaker",
  },
  {
    id: "deal-007",
    title: "Next-Gen Gaming Maus mit RGB",
    slug: "next-gen-gaming-maus-mit-rgb",
    description:
      "Ultraleichte Gaming Maus mit 26.000 DPI Sensor, anpassbarer RGB-Beleuchtung und 8 programmierbaren Tasten.",
    price: 49.99,
    oldPrice: 79.99,
    category: "gaming",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-19",
    affiliateUrl: "https://example.com/deal/gaming-maus",
  },
  {
    id: "deal-008",
    title: "Ergonomischer Gaming-Stuhl mit Lendenstütze",
    slug: "ergonomischer-gaming-stuhl-mit-lendenstuetze",
    description:
      "Stabiler Gaming-Stuhl mit verstellbarer Rückenlehne, weicher Polsterung und atmungsaktivem Bezug für lange Sessions.",
    price: 179.0,
    oldPrice: 249.0,
    category: "gaming",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-05-13",
    affiliateUrl: "https://example.com/deal/gaming-stuhl",
  },
]
