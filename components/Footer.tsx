"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-(--color-border) bg-(--color-surface) shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t("footer.company")}
            </h3>
            <p className="text-sm text-(--color-muted-text) leading-relaxed">
              {t("footer.companyDescription")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t("footer.product")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.documentation")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t("footer.support")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.helpCenter")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.status")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  {t("footer.cookies")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-(--color-border) pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-(--color-muted-text)">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t("footer.twitter")}
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t("footer.linkedin")}
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              {t("footer.github")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
