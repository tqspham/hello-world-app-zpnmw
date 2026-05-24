"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();

  const footerSections = [
    {
      titleKey: "footer.company",
      contentKey: "footer.companyDescription",
      type: "description" as const,
    },
    {
      titleKey: "footer.product",
      links: [
        { href: "#", labelKey: "footer.features" },
        { href: "#", labelKey: "footer.pricing" },
        { href: "#", labelKey: "footer.documentation" },
      ],
    },
    {
      titleKey: "footer.support",
      links: [
        { href: "#", labelKey: "footer.helpCenter" },
        { href: "#", labelKey: "footer.contactFooter" },
        { href: "#", labelKey: "footer.status" },
      ],
    },
    {
      titleKey: "footer.legal",
      links: [
        { href: "#", labelKey: "footer.privacy" },
        { href: "#", labelKey: "footer.terms" },
        { href: "#", labelKey: "footer.cookies" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", labelKey: "footer.twitter" },
    { href: "#", labelKey: "footer.linkedin" },
    { href: "#", labelKey: "footer.github" },
  ];

  return (
    <footer className="mt-16 border-t border-(--color-border) bg-(--color-surface) shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-(--color-primary) mb-4 transition-colors">
                {getTranslation(language, section.titleKey)}
              </h3>
              {section.type === "description" ? (
                <p className="text-sm text-(--color-muted-text) leading-relaxed">
                  {getTranslation(language, section.contentKey)}
                </p>
              ) : (
                <ul className="space-y-3">
                  {"links" in section &&
                    section.links.map((link) => (
                      <li key={link.labelKey}>
                        <a
                          href={link.href}
                          className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                        >
                          {getTranslation(language, link.labelKey)}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-(--color-border) pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-(--color-muted-text)">
            {getTranslation(language, "footer.copyright")}
          </p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
              >
                {getTranslation(language, link.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
