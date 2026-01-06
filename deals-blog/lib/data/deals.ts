import type { Deal } from "@/types";

const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

export const deals: Deal[] = [
  {
    id: "deal-001",
    slug: "sony-wh-1000xm5-kopfhoerer",
    title: "Sony WH-1000XM5 Noise-Cancelling Kopfhörer",
    description:
      "Premium-Klang für Pendler und Homeoffice: Die WH-1000XM5 liefern satten Bass, klare Höhen und exzellente Sprachqualität für Calls. Der adaptive Noise-Cancelling-Modus passt sich automatisch an Umgebung und Aktivität an. Mit bis zu 30 Stunden Akkulaufzeit, Schnellladefunktion und angenehm weichen Ohrpolstern sind sie ideal für lange Arbeitstage oder Reisen.",
    originalPrice: 399,
    salePrice: 279,
    discount: 30,
    imageUrl: "https://images.unsplash.com/photo-1518445692885-63568637779a?auto=format&fit=crop&w=1200&q=80",
    category: "Elektronik",
    shopName: "Amazon",
    affiliateLink: "https://www.amazon.de",
    expiryDate: addDays(3),
    isFeatured: true,
    rating: 5
  },
  {
    id: "deal-002",
    slug: "apple-watch-se-2024",
    title: "Apple Watch SE (2024) Aluminium 44 mm",
    description:
      "Gesundheits- und Fitness-Tracking zum fairen Preis: Die Apple Watch SE bietet Herzfrequenzmessung, Sturzerkennung und Trainings-Tracking mit präzisem GPS. Das helle Retina-Display ist auch bei Sonne gut ablesbar, und der neue S8-Chip sorgt für flüssige Performance. Ideal für alle, die smart bleiben möchten, ohne zum Topmodell zu greifen.",
    originalPrice: 329,
    salePrice: 249,
    discount: 24,
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1200&q=80",
    category: "Elektronik",
    shopName: "MediaMarkt",
    affiliateLink: "https://www.mediamarkt.de",
    expiryDate: addDays(5),
    isFeatured: true,
    rating: 4
  },
  {
    id: "deal-003",
    slug: "lenovo-ideapad-5-pro",
    title: "Lenovo IdeaPad 5 Pro 14\" Laptop",
    description:
      "Ein schlankes Arbeitstier für Studium und Office: Das IdeaPad 5 Pro kombiniert ein farbstarkes 2.8K-Display mit einem schnellen AMD Ryzen-Prozessor und 16 GB RAM. Die beleuchtete Tastatur, der Fingerabdrucksensor und die lange Akkulaufzeit machen es zum perfekten Begleiter für unterwegs. Ideal für Multitasking, Streaming und leichte Kreativarbeiten.",
    originalPrice: 899,
    salePrice: 649,
    discount: 28,
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    category: "Elektronik",
    shopName: "Otto",
    affiliateLink: "https://www.otto.de",
    expiryDate: addDays(6),
    isFeatured: true,
    rating: 4
  },
  {
    id: "deal-004",
    slug: "nike-air-max-sneaker",
    title: "Nike Air Max 270 Sneaker",
    description:
      "Streetwear-Icon mit maximalem Komfort: Der Air Max 270 kombiniert ein atmungsaktives Mesh-Obermaterial mit der größten Air-Dämpfung von Nike. Die Silhouette ist sportlich, aber stylisch genug für Alltag und City. Dank der stabilen Ferse und flexiblen Sohle eignet er sich auch für lange Tage auf den Beinen.",
    originalPrice: 149,
    salePrice: 99,
    discount: 34,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    category: "Mode",
    shopName: "Zalando",
    affiliateLink: "https://www.zalando.de",
    expiryDate: addDays(4),
    isFeatured: true,
    rating: 5
  },
  {
    id: "deal-005",
    slug: "about-you-regenjacke",
    title: "About You Urban Regenjacke",
    description:
      "Diese leichte Regenjacke vereint minimalistisches Design mit praktischer Funktion. Die wasserabweisende Oberfläche hält dich bei plötzlichen Schauern trocken, während die verstellbare Kapuze und die verschweißten Nähte zusätzlichen Schutz bieten. Durch den geraden Schnitt lässt sie sich bequem über Hoodies tragen und passt perfekt in jede Alltagsgarderobe.",
    originalPrice: 89,
    salePrice: 59,
    discount: 34,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    category: "Mode",
    shopName: "About You",
    affiliateLink: "https://www.aboutyou.de",
    expiryDate: addDays(2),
    isFeatured: false,
    rating: 4
  },
  {
    id: "deal-006",
    slug: "adidas-rucksack-classic",
    title: "Adidas Classic Rucksack",
    description:
      "Robust, geräumig und stylisch: Der Adidas Classic Rucksack bietet ein großes Hauptfach für Laptop und Bücher, eine Fronttasche für Kleinkram und gepolsterte Schultergurte für angenehmen Tragekomfort. Das strapazierfähige Material macht ihn ideal für Uni, Büro oder Wochenend-Trips. Ein zeitloser Begleiter in cleanem Design.",
    originalPrice: 59,
    salePrice: 39,
    discount: 34,
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    category: "Mode",
    shopName: "Zalando",
    affiliateLink: "https://www.zalando.de",
    expiryDate: addDays(7),
    isFeatured: false,
    rating: 4
  },
  {
    id: "deal-007",
    slug: "playstation-5-bundle",
    title: "PlayStation 5 Slim Bundle mit Controller",
    description:
      "Das Gaming-Upgrade des Jahres: Die PS5 Slim kommt mit ultraschneller SSD, 4K-Gaming und haptischem Feedback im DualSense-Controller. Im Bundle ist ein zusätzlicher Controller enthalten, ideal für Couch-Coop-Abende. Das schlanke Design spart Platz im Wohnzimmer, während exklusive Titel für epische Abenteuer sorgen.",
    originalPrice: 549,
    salePrice: 449,
    discount: 18,
    imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
    category: "Gaming",
    shopName: "MediaMarkt",
    affiliateLink: "https://www.mediamarkt.de",
    expiryDate: addDays(1),
    isFeatured: true,
    rating: 5
  },
  {
    id: "deal-008",
    slug: "elden-ring-ps5",
    title: "Elden Ring für PS5",
    description:
      "Ein episches Abenteuer für Fans von Open-World-Games: Elden Ring kombiniert ein düsteres Fantasy-Setting mit anspruchsvollen Bosskämpfen und einer riesigen, frei erkundbaren Welt. Auf der PS5 liefert das Spiel gestochen scharfe Grafik und kurze Ladezeiten. Perfekt für lange Gaming-Sessions und alle, die eine Herausforderung suchen.",
    originalPrice: 69,
    salePrice: 49,
    discount: 29,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    category: "Gaming",
    shopName: "Amazon",
    affiliateLink: "https://www.amazon.de",
    expiryDate: addDays(6),
    isFeatured: false,
    rating: 5
  },
  {
    id: "deal-009",
    slug: "philips-kaffeemaschine-latte",
    title: "Philips LatteGo Kaffeevollautomat",
    description:
      "Barista-Qualität zu Hause: Der Philips LatteGo brüht Espresso, Cappuccino und Latte Macchiato per Knopfdruck. Das Milchsystem lässt sich in Sekunden reinigen und der Aroma-Einsteller erlaubt individuelle Stärke. Mit Keramikmahlwerk und großem Wassertank ist er ideal für Familien oder alle, die jeden Morgen frischen Kaffee genießen.",
    originalPrice: 499,
    salePrice: 329,
    discount: 34,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    category: "Haushalt",
    shopName: "Otto",
    affiliateLink: "https://www.otto.de",
    expiryDate: addDays(5),
    isFeatured: true,
    rating: 4
  },
  {
    id: "deal-010",
    slug: "bosch-akku-staubsauger",
    title: "Bosch Unlimited Akku-Staubsauger",
    description:
      "Kabellos reinigen ohne Kompromisse: Der Bosch Unlimited liefert starke Saugleistung auf Teppich und Hartboden. Dank wechselbarem Akku sind längere Putzsessions möglich, und das Zubehör für Polster und Fugen ist gleich dabei. Das leichte Design erleichtert das Handling in der Wohnung. Ideal für Tierhaare und den schnellen Frühjahrsputz.",
    originalPrice: 399,
    salePrice: 279,
    discount: 30,
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    category: "Haushalt",
    shopName: "MediaMarkt",
    affiliateLink: "https://www.mediamarkt.de",
    expiryDate: addDays(4),
    isFeatured: true,
    rating: 4
  },
  {
    id: "deal-011",
    slug: "yoga-matte-premium",
    title: "Premium Yoga- und Fitnessmatte",
    description:
      "Die extra dicke Premium-Matte bietet stabilen Halt für Yoga, Pilates und Home-Workouts. Die rutschfeste Oberfläche sorgt auch bei schweißtreibenden Sessions für Sicherheit. Durch das hautfreundliche Material lässt sie sich leicht reinigen und ist angenehm auf Gelenken. Perfekt für Anfänger wie Fortgeschrittene.",
    originalPrice: 69,
    salePrice: 39,
    discount: 43,
    imageUrl: "https://images.unsplash.com/photo-1554344058-1d1e3b7d9d02?auto=format&fit=crop&w=1200&q=80",
    category: "Sport",
    shopName: "Amazon",
    affiliateLink: "https://www.amazon.de",
    expiryDate: addDays(2),
    isFeatured: false,
    rating: 4
  },
  {
    id: "deal-012",
    slug: "veganes-proteinpulver",
    title: "Veganes Proteinpulver Schoko 1 kg",
    description:
      "Pflanzliches Protein für Training und Alltag: Die Mischung aus Erbsen- und Reisprotein liefert alle essenziellen Aminosäuren und schmeckt cremig schokoladig. Ideal für Shakes nach dem Workout oder als Zusatz im Frühstück. Frei von künstlichen Süßstoffen, leicht löslich und gut verträglich.",
    originalPrice: 49,
    salePrice: 32,
    discount: 35,
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    category: "Sport",
    shopName: "About You",
    affiliateLink: "https://www.aboutyou.de",
    expiryDate: addDays(3),
    isFeatured: false,
    rating: 4
  }
];

export const featuredDeals = deals.filter((deal) => deal.isFeatured).slice(0, 6);
