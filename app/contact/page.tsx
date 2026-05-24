"use client";

import { useLanguage } from "@/lib/language-context";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-background) transition-colors py-12 px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
            {t("contact.heading")}
          </h1>
          <p className="text-lg text-(--color-muted-text) transition-colors">
            {t("contact.description")}
          </p>
        </div>
        <div className="bg-(--color-surface) rounded-lg border border-(--color-border) shadow-sm p-8 transition-colors">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
