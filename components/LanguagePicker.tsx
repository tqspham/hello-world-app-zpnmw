"use client";

import { Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguageLabel = language === "en" ? translations.en.language.english : translations.vi.language.vietnamese;
  const languages: Array<{ code: "en" | "vi"; label: string }> = [
    { code: "en", label: translations.en.language.english },
    { code: "vi", label: translations.vi.language.vietnamese },
  ];

  const handleLanguageSelect = (lang: "en" | "vi") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded"
        aria-label={`${translations.en.language.label}: ${currentLanguageLabel}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={20} />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguageLabel}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-(--color-surface) border border-(--color-border) rounded-lg shadow-lg animate-in fade-in duration-150 z-50 transition-colors"
          role="listbox"
          aria-label={translations.en.language.label}
        >
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  language === lang.code
                    ? "bg-(--color-accent) text-(--color-surface) font-medium"
                    : "text-(--color-primary) hover:bg-(--color-background)"
                }`}
                role="option"
                aria-selected={language === lang.code}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
