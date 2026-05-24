"use client";

import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) transition-colors">
      <h1 className="text-4xl font-bold text-(--color-primary) transition-colors">
        {t("home.title")}
      </h1>
    </div>
  );
}
