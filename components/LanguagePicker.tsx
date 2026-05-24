"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation, type Language } from "@/lib/translations";
import { ChevronDown } from "lucide-react";

const LANGUAGES: Array<{ code: Language; name: string }> = [
  { code: "en", name: "English" },
  { code: "vi", name: "Tiếng Việt" },
];

export default function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const translations = getTranslation(language);
  const currentLanguageName = LANGUAGES.find((l) => l.code === language)?.name;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
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

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 px-3 py-2 text-(--color-primary) hover:text-(--color-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded data-theme-light:focus:ring-offset-(--color-background) data-theme-dark:focus:ring-offset-(--color-surface)"
        aria-label={translations.language.label}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm font-medium">{currentLanguageName}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-(--color-surface) border border-(--color-border) rounded-lg shadow-lg z-50 overflow-hidden animate-in fade-in duration-150 transition-colors"
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-inset ${
                language === lang.code
                  ? "bg-(--color-accent) text-(--color-surface) font-medium"
                  : "text-(--color-primary) hover:bg-(--color-background) focus:bg-(--color-background)"
              }`}
              role="option"
              aria-selected={language === lang.code}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
