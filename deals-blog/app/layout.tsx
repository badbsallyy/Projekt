import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer, Navbar, ThemeProvider } from "@/components/layout";

const TEXT = {
  title: "DealFlow – Die besten Deals des Tages",
  description: "Entdecke kuratierte Deals, Preisvergleiche und Rabatt-Highlights für Deutschland."
};

export const metadata: Metadata = {
  title: TEXT.title,
  description: TEXT.description,
  openGraph: {
    title: TEXT.title,
    description: TEXT.description,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className="min-h-screen bg-slate-950 text-white">
        <ThemeProvider>
          <div className="mx-auto flex min-h-screen flex-col">
            <div className="px-4 pt-4">
              <Navbar />
            </div>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
