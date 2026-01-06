"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { FloatingNavbar } from "@/components/ui";
import { useTheme } from "@/components/layout/theme-context";
import { cn } from "@/lib/utils";

const TEXT = {
  logo: "DealFlow",
  home: "Home",
  deals: "Deals",
  blog: "Blog",
  categories: "Kategorien",
  darkMode: "Dark Mode",
  lightMode: "Light Mode",
  openMenu: "Menü öffnen",
  closeMenu: "Menü schließen"
};

const CATEGORY_LINKS = [
  { label: "Elektronik", href: "/deals?category=Elektronik" },
  { label: "Mode", href: "/deals?category=Mode" },
  { label: "Haushalt", href: "/deals?category=Haushalt" },
  { label: "Sport", href: "/deals?category=Sport" },
  { label: "Gaming", href: "/deals?category=Gaming" }
];

const NAV_LINKS = [
  { label: TEXT.home, href: "/" },
  { label: TEXT.deals, href: "/deals" },
  { label: TEXT.blog, href: "/blog" }
];

export const Navbar = () => {
  const { mode, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <FloatingNavbar>
      <div className="flex w-full items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold text-white transition hover:text-emerald-300"
        >
          <span className="relative">
            <span className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md" />
            <span className="relative">{TEXT.logo}</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-200 hover:text-white">
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoriesOpen((prev) => !prev)}
              className="flex items-center gap-2 text-sm text-slate-200 hover:text-white"
            >
              {TEXT.categories}
              <ChevronDown className={cn("h-4 w-4 transition", categoriesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-xl"
                >
                  {CATEGORY_LINKS.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label={mode === "dark" ? TEXT.lightMode : TEXT.darkMode}
            className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 hover:text-white"
          >
            {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {mode === "dark" ? TEXT.lightMode : TEXT.darkMode}
          </button>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? TEXT.closeMenu : TEXT.openMenu}
          className="lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="mt-4 flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/90 p-6 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{TEXT.categories}</p>
              {CATEGORY_LINKS.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block text-sm text-slate-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {category.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={toggle}
              className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200"
            >
              {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {mode === "dark" ? TEXT.lightMode : TEXT.darkMode}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </FloatingNavbar>
  );
};
