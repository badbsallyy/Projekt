# DealFlow – Aceternity UI Deals-Blog

## Setup

```bash
npm install
npm run dev
```

Die App läuft anschließend unter `http://localhost:3000`.

## Verwendete Aceternity UI Komponenten

- Aurora Background
- Card Hover Effect
- Moving Border
- Sparkles
- Background Gradient
- Floating Navbar
- Background Beams
- Bento Grid
- Tabs

## Deals hinzufügen

1. Öffne `lib/data/deals.ts`.
2. Ergänze ein neues `Deal`-Objekt in der `deals`-Liste.
3. Achte auf die Pflichtfelder wie `title`, `description`, `imageUrl` und `expiryDate`.
4. Setze `isFeatured: true`, wenn der Deal auf der Startseite erscheinen soll.

## Blog-Artikel hinzufügen

1. Öffne `lib/data/blog.ts`.
2. Ergänze ein neues `BlogPost`-Objekt in der `blogPosts`-Liste.
3. Stelle sicher, dass `content` mindestens 300 Wörter enthält.
