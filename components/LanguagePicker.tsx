"use client";

import { useLanguage } from "@/lib/language-context";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleSelectLanguage = (code: "en" | "vi") => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded flex items-center gap-1"
        aria-label="Language selector"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-(--color-surface) border border-(--color-border) rounded-lg shadow-lg z-50 min-w-max animate-in fade-in duration-150"
          role="listbox"
          aria-label="Language options"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code as "en" | "vi")}
              className={`w-full text-left px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-inset ${
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
      )}
    </div>
  );
}
