"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguagePicker from "./LanguagePicker";
import { useLanguage } from "@/lib/language-context";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/", labelKey: "nav.home" },
    { href: "#features", labelKey: "nav.features" },
    { href: "#pricing", labelKey: "nav.pricing" },
    { href: "#documentation", labelKey: "nav.documentation" },
    { href: "#help", labelKey: "nav.help" },
    { href: "/contact", labelKey: "nav.contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-(--color-surface) border-b border-(--color-border) shadow-sm transition-colors">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link
              href="/"
              className="text-lg font-semibold text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded px-2 py-1"
            >
              {t("nav.brand")}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-(--color-primary) hover:text-(--color-secondary) transition-colors relative group focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded px-2 py-1"
                >
                  {t(link.labelKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--color-secondary) group-hover:w-full transition-all duration-200 ease-in-out"></span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle, Language Picker and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <LanguagePicker />
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Semi-transparent scrim */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menu panel */}
          <div className="absolute top-16 left-0 right-0 bg-(--color-surface) shadow-lg animate-in fade-in duration-150 transition-colors">
            <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded px-2 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
