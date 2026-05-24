"use client";

import { useLanguage } from "@/lib/language-context";
import { Check } from "lucide-react";

interface PricingPlan {
  id: string;
  nameKey: string;
  priceKey: string;
  billingPeriodKey: string;
  descriptionKey: string;
  featuresKey: string[];
  buttonLabelKey: string;
  isRecommended?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    nameKey: "pricing.plans.starter.name",
    priceKey: "pricing.plans.starter.price",
    billingPeriodKey: "pricing.plans.starter.billingPeriod",
    descriptionKey: "pricing.plans.starter.description",
    featuresKey: [
      "pricing.plans.starter.features.feature1",
      "pricing.plans.starter.features.feature2",
      "pricing.plans.starter.features.feature3",
    ],
    buttonLabelKey: "pricing.plans.starter.cta",
  },
  {
    id: "professional",
    nameKey: "pricing.plans.professional.name",
    priceKey: "pricing.plans.professional.price",
    billingPeriodKey: "pricing.plans.professional.billingPeriod",
    descriptionKey: "pricing.plans.professional.description",
    featuresKey: [
      "pricing.plans.professional.features.feature1",
      "pricing.plans.professional.features.feature2",
      "pricing.plans.professional.features.feature3",
      "pricing.plans.professional.features.feature4",
    ],
    buttonLabelKey: "pricing.plans.professional.cta",
    isRecommended: true,
  },
  {
    id: "enterprise",
    nameKey: "pricing.plans.enterprise.name",
    priceKey: "pricing.plans.enterprise.price",
    billingPeriodKey: "pricing.plans.enterprise.billingPeriod",
    descriptionKey: "pricing.plans.enterprise.description",
    featuresKey: [
      "pricing.plans.enterprise.features.feature1",
      "pricing.plans.enterprise.features.feature2",
      "pricing.plans.enterprise.features.feature3",
      "pricing.plans.enterprise.features.feature4",
      "pricing.plans.enterprise.features.feature5",
    ],
    buttonLabelKey: "pricing.plans.enterprise.cta",
  },
];

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-background) transition-colors py-12 px-6">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
            {t("pricing.heading")}
          </h1>
          <p className="text-lg text-(--color-muted-text) transition-colors max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg border transition-all ${
                plan.isRecommended
                  ? "border-(--color-accent) bg-(--color-accent) bg-opacity-5 shadow-lg scale-105 md:scale-100"
                  : "border-(--color-border) bg-(--color-surface) shadow-sm"
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="px-6 pt-6 pb-0">
                  <div className="inline-block bg-(--color-accent) text-(--color-surface) px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {t("pricing.recommended")}
                  </div>
                </div>
              )}

              {/* Plan Content */}
              <div className="p-8">
                {/* Plan Name */}
                <h2 className="text-2xl font-bold text-(--color-primary) mb-2 transition-colors">
                  {t(plan.nameKey)}
                </h2>

                {/* Plan Description */}
                <p className="text-(--color-muted-text) text-sm mb-6 transition-colors">
                  {t(plan.descriptionKey)}
                </p>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-(--color-muted-text) text-sm">$</span>
                    <span className="text-4xl font-bold text-(--color-primary)">
                      {t(plan.priceKey)}
                    </span>
                  </div>
                  <p className="text-(--color-muted-text) text-sm transition-colors">
                    {t(plan.billingPeriodKey)}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 font-medium rounded-lg transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 ${
                    plan.isRecommended
                      ? "bg-(--color-accent) text-(--color-surface) hover:opacity-90"
                      : "bg-(--color-secondary) text-(--color-surface) hover:opacity-90"
                  }`}
                >
                  {t(plan.buttonLabelKey)}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-(--color-primary) transition-colors">
                    {t("pricing.featuresIncluded")}
                  </p>
                  <ul className="space-y-3">
                    {plan.featuresKey.map((featureKey, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-(--color-text) transition-colors"
                      >
                        <Check
                          size={18}
                          className="text-(--color-success) flex-shrink-0"
                        />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16 pt-8 border-t border-(--color-border)">
          <p className="text-(--color-muted-text) transition-colors">
            {t("pricing.faq")}
          </p>
        </div>
      </div>
    </div>
  );
}
