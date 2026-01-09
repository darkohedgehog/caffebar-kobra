"use client";

import { useTranslations } from "next-intl";

export default function PrintButton() {
  const t = useTranslations("Print");

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm text-emerald-50/90 backdrop-blur-sm transition hover:border-emerald-400/30 hover:bg-emerald-500/10"
    >
      {t("button")}
    </button>
  );
}