import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getTranslation } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Contact - Hello World",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  const translations = getTranslation("en");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-background) transition-colors py-12 px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
            {translations.contact.pageTitle}
          </h1>
          <p className="text-lg text-(--color-muted-text) transition-colors">
            {translations.contact.pageDescription}
          </p>
        </div>
        <div className="bg-(--color-surface) rounded-lg border border-(--color-border) shadow-sm p-8 transition-colors">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
",
  "app/page.tsx": "export const metadata = {
  title: "Home - Hello World",
  description: "A clean and approachable application built with Next.js",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) transition-colors">
      <h1 className="text-4xl font-bold text-(--color-primary) transition-colors">Hello World</h1>
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
