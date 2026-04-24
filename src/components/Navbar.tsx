"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";
import { Locale } from "@/i18n/translations";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        W.
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="#services" className="hover:text-white transition-colors">{t.nav.services}</Link>
        <Link href="#portfolio" className="hover:text-white transition-colors">{t.nav.work}</Link>
        <Link href="#process" className="hover:text-white transition-colors">{t.nav.process}</Link>
        <Link href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</Link>
      </nav>

      <div className="flex items-center gap-3">
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-400 border border-white/20 rounded-full px-3 py-2 hover:text-white hover:border-white/40 transition-colors"
          >
            <span>{current.flag}</span>
            <span>{current.label}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-28 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-xl"
              >
                {LOCALES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                      l.code === locale
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="text-sm font-medium border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
          {t.nav.letsTalk}
        </button>
      </div>
    </motion.header>
  );
}
