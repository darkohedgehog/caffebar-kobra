"use client";

import { useLocale, useTranslations } from "next-intl";
import type { MenuSection as MenuSectionType } from "@/data/menu";
import { formatMeasure } from "@/utils/formatMeasure";
import { MENU_SECTION_ICONS } from "./menuSectionIcons";

export default function MenuSection({ section }: { section: MenuSectionType }) {
  const t = useTranslations("Menu");
  const locale = useLocale();
  const prices = useTranslations("Prices");

  const formatEur = (value: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "hr-HR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(value);

    const Icon = MENU_SECTION_ICONS[section.id];

  return (
    <section id={section.id} className="scroll-mt-28">
      {/* Section header */}
      <div className="mb-3 flex items-end justify-between">
        <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-emerald-50/90">
  {Icon && (
    <Icon className="h-5 w-5 text-emerald-400/80 shrink-0 no-print" />
  )}
  {t(`sections.${section.id}`)}
</h2>
        <div className="h-px flex-1 mx-4 bg-linear-to-r from-emerald-400/25 to-transparent" />
      </div>

      {/* Card */}
      <div className="print-card rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_4.5rem_4.5rem] gap-2 border-b border-white/10 px-4 py-2 text-right text-xs text-emerald-50/60 sm:gap-4">
          <span aria-hidden="true" />
          <abbr title={prices("regular")} className="no-underline">{prices("regularShort")}</abbr>
          <abbr title={prices("anchor")} className="no-underline">{prices("anchorShort")}</abbr>
        </div>
        <div className="divide-y divide-white/10">
          {section.items.map((item, idx) => {
            const measure = formatMeasure(item.measure);

            return (
              <div
                key={`${section.id}-${idx}-${item.id}`}
                className="grid grid-cols-[minmax(0,1fr)_4.5rem_4.5rem] items-center gap-2 px-4 py-3 sm:gap-4"
              >
                {/* Name + measure */}
                <div className="min-w-0">
                  <div className="wrap-break-word font-medium text-emerald-50/90">
                    {t(`items.${item.id}`)}
                  </div>

                  {measure && (
                    <div className="text-xs text-emerald-50/60">{measure}</div>
                  )}
                </div>

                <div aria-label={prices("regular")} className="text-right text-sm font-semibold tabular-nums text-emerald-50/90 sm:text-base">
                  {formatEur(item.price)}
                </div>
                <div aria-label={prices("anchor")} className="text-right text-sm font-semibold tabular-nums text-emerald-50/90 sm:text-base">
                  {formatEur(item.price)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}