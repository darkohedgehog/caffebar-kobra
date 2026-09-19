import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getPriceListRows, serializeCsv } from "@/lib/price-list";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return new Response("Not found", { status: 404 });
  }
  const t = await getTranslations({ locale, namespace: "Menu" });
  const labels = await getTranslations({ locale, namespace: "PriceLists" });
  const prices = await getTranslations({ locale, namespace: "Prices" });
  const formatPrice = (price: number) => price.toFixed(2).replace(".", locale === "hr" ? "," : ".");
  const csv = serializeCsv([
    [labels("category"), labels("name"), labels("measure"), `RC - ${prices("regular")} (EUR)`, `SC - ${prices("anchor")} (EUR)`],
    ...getPriceListRows(t).map((row) => [row.category, row.name, row.measure, formatPrice(row.regularPrice), formatPrice(row.anchorPrice)]),
  ]);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="kobra-cjenik-${locale}.csv"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
