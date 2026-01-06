import type { ReactNode } from "react"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "DealDraft",
  description: "Minimaler Deals Blog mit kuratierten Angeboten.",
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-12">
          {children}
        </main>
      </body>
    </html>
  )
}
