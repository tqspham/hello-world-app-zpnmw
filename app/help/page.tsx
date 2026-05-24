"use client";

import { useState, useRef } from "react";
import { Search, ChevronDown, Search as SearchIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface HelpArticle {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

interface HelpCategory {
  id: string;
  nameKey: string;
  iconEmoji: string;
  articlesKey: HelpArticle[];
}

const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    nameKey: "help.categories.gettingStarted.name",
    iconEmoji: "🚀",
    articlesKey: [
      {
        id: "gs-1",
        titleKey: "help.categories.gettingStarted.articles.creating",
        descriptionKey: "help.categories.gettingStarted.articles.creatingDesc",
      },
      {
        id: "gs-2",
        titleKey: "help.categories.gettingStarted.articles.firstSteps",
        descriptionKey: "help.categories.gettingStarted.articles.firstStepsDesc",
      },
      {
        id: "gs-3",
        titleKey: "help.categories.gettingStarted.articles.basics",
        descriptionKey: "help.categories.gettingStarted.articles.basicsDesc",
      },
    ],
  },
  {
    id: "account",
    nameKey: "help.categories.account.name",
    iconEmoji: "👤",
    articlesKey: [
      {
        id: "acc-1",
        titleKey: "help.categories.account.articles.profile",
        descriptionKey: "help.categories.account.articles.profileDesc",
      },
      {
        id: "acc-2",
        titleKey: "help.categories.account.articles.password",
        descriptionKey: "help.categories.account.articles.passwordDesc",
      },
      {
        id: "acc-3",
        titleKey: "help.categories.account.articles.security",
        descriptionKey: "help.categories.account.articles.securityDesc",
      },
    ],
  },
  {
    id: "billing",
    nameKey: "help.categories.billing.name",
    iconEmoji: "💳",
    articlesKey: [
      {
        id: "bill-1",
        titleKey: "help.categories.billing.articles.plans",
        descriptionKey: "help.categories.billing.articles.plansDesc",
      },
      {
        id: "bill-2",
        titleKey: "help.categories.billing.articles.payment",
        descriptionKey: "help.categories.billing.articles.paymentDesc",
      },
      {
        id: "bill-3",
        titleKey: "help.categories.billing.articles.invoices",
        descriptionKey: "help.categories.billing.articles.invoicesDesc",
      },
    ],
  },
  {
    id: "technical-support",
    nameKey: "help.categories.technicalSupport.name",
    iconEmoji: "⚙️",
    articlesKey: [
      {
        id: "tech-1",
        titleKey: "help.categories.technicalSupport.articles.troubleshooting",
        descriptionKey: "help.categories.technicalSupport.articles.troubleshootingDesc",
      },
      {
        id: "tech-2",
        titleKey: "help.categories.technicalSupport.articles.errors",
        descriptionKey: "help.categories.technicalSupport.articles.errorsDesc",
      },
      {
        id: "tech-3",
        titleKey: "help.categories.technicalSupport.articles.performance",
        descriptionKey: "help.categories.technicalSupport.articles.performanceDesc",
      },
    ],
  },
];

export default function HelpPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
      setSelectedCategory(null);
    } else {
      newExpanded.add(categoryId);
      setSelectedCategory(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = HELP_CATEGORIES.map((category) => ({
    ...category,
    articlesKey: category.articlesKey.filter((article) => {
      const title = t(article.titleKey).toLowerCase();
      const description = t(article.descriptionKey).toLowerCase();
      const query = searchQuery.toLowerCase();
      return title.includes(query) || description.includes(query);
    }),
  })).filter((category) => category.articlesKey.length > 0 || searchQuery === "");

  const hasSearchResults = searchQuery !== "" && filteredCategories.some(cat => cat.articlesKey.length > 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setExpandedCategories(new Set());
      setSelectedCategory(null);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setExpandedCategories(new Set());
    setSelectedCategory(null);
    searchInputRef.current?.focus();
  };

  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) transition-colors">
      {/* Hero Section */}
      <div className="w-full bg-(--color-surface) border-b border-(--color-border) transition-colors">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
              {t("help.heading")}
            </h1>
            <p className="text-lg text-(--color-muted-text) transition-colors">
              {t("help.description")}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="relative">
              <SearchIcon
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-(--color-muted-text) pointer-events-none"
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={t("help.searchPlaceholder")}
                className="w-full pl-12 pr-4 py-3 border border-(--color-border) rounded-lg bg-(--color-surface) text-(--color-text) placeholder-text-(--color-muted-text) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2"
                aria-label={t("help.searchAriaLabel")}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-(--color-muted-text) hover:text-(--color-primary) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 rounded px-2 py-1"
                  aria-label={t("help.clearSearchLabel")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 lg:px-10">
        {/* Search Results Meta */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-sm text-(--color-muted-text) transition-colors">
              {hasSearchResults
                ? t("help.searchResults").replace(
                    "{count}",
                    filteredCategories
                      .reduce((sum, cat) => sum + cat.articlesKey.length, 0)
                      .toString()
                  )
                : t("help.noResults")}
            </p>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-(--color-border) bg-(--color-surface) transition-all overflow-hidden hover:shadow-md"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-(--color-background) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-inset"
                aria-expanded={expandedCategories.has(category.id)}
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{category.iconEmoji}</span>
                  <h2 className="text-lg font-semibold text-(--color-primary) transition-colors">
                    {t(category.nameKey)}
                  </h2>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-(--color-secondary) transition-transform duration-200 flex-shrink-0 ${
                    expandedCategories.has(category.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Category Articles */}
              {expandedCategories.has(category.id) && category.articlesKey.length > 0 && (
                <div className="border-t border-(--color-border) bg-(--color-background) transition-colors">
                  <ul className="divide-y divide-(--color-border)">
                    {category.articlesKey.map((article) => (
                      <li
                        key={article.id}
                        className="px-6 py-4 hover:bg-(--color-surface) transition-colors"
                      >
                        <a
                          href="#"
                          className="flex items-start justify-between gap-4 text-left group focus:outline-none"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-(--color-primary) group-hover:text-(--color-secondary) transition-colors mb-1">
                              {t(article.titleKey)}
                            </h3>
                            <p className="text-sm text-(--color-muted-text) transition-colors line-clamp-2">
                              {t(article.descriptionKey)}
                            </p>
                          </div>
                          <ChevronDown
                            size={16}
                            className="text-(--color-secondary) flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && searchQuery !== "" && (
          <div className="text-center py-12">
            <p className="text-(--color-muted-text) text-lg transition-colors mb-4">
              {t("help.noResultsMessage")}
            </p>
            <button
              onClick={clearSearch}
              className="px-4 py-2 bg-(--color-secondary) text-(--color-surface) rounded-lg hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2"
            >
              {t("help.clearSearchButton")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
