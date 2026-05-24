"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const t = translations[language];
  const languages: Array<keyof typeof translations> = ["en", "vi"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleLanguageSelect = (lang: keyof typeof translations) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const getLanguageLabel = (lang: keyof typeof translations) => {
    return lang === "en" ? t.language.english : t.language.vietnamese;
  };

  const currentLanguageLabel = getLanguageLabel(language);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded"
        aria-label={`${t.language.label}: ${currentLanguageLabel}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm font-medium">{currentLanguageLabel}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-40 bg-(--color-surface) border border-(--color-border) rounded-lg shadow-lg z-50 animate-in fade-in duration-150 transition-opacity"
          role="listbox"
          aria-label={t.language.label}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageSelect(lang)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                language === lang
                  ? "bg-(--color-accent) text-(--color-surface) font-medium"
                  : "text-(--color-primary) hover:bg-(--color-secondary) hover:text-(--color-surface)"
              } first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-inset`}
              role="option"
              aria-selected={language === lang}
            >
              {getLanguageLabel(lang)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
