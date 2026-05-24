"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="mt-16 border-t border-(--color-border) bg-(--color-surface) shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t.footer.company}
            </h3>
            <p className="text-sm text-(--color-muted-text) leading-relaxed">
              {t.footer.companyDesc}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.productFeatures}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.productPricing}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.productDocs}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t.footer.support}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.supportHelp}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.supportContact}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.supportStatus}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.legalPrivacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.legalTerms}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t.footer.legalCookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-(--color-border) pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-(--color-muted-text)">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t.footer.social.twitter}
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t.footer.social.linkedin}
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t.footer.social.github}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
",
  "app/contact/page.tsx": "import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Hello World",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* English version */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-background) transition-colors py-12 px-6" lang="en">
        <div className="w-full max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
              Get in Touch
            </h1>
            <p className="text-lg text-(--color-muted-text) transition-colors">
              We'd love to hear from you. Send us a message and we'll respond as soon as we can.
            </p>
          </div>
          <div className="bg-(--color-surface) rounded-lg border border-(--color-border) shadow-sm p-8 transition-colors">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
",
  "app/page.tsx": "import { Metadata } from "next";
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Home - Hello World",
  description: "A clean and approachable application built with Next.js",
};

export default function Home() {
  const t = translations.en;

  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) transition-colors">
      <h1 className="text-4xl font-bold text-(--color-primary) transition-colors">
        {t.home.title}
      </h1>
    </div>
  );
}
",
  "app/layout.tsx": "import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A clean, approachable application with contact form and helpful resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="flex-1 mt-20">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
