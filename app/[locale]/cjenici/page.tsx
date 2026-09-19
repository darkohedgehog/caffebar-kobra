import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPriceListRows } from "@/lib/price-list";
import PrintButton from "@/components/ui/PrintButton";

export async function generateMetadata() {
  const t = await getTranslations("PriceLists");
  return { title: `${t("title")} | Caffe Bar Kobra` };
}

export default async function PriceListsPage() {
  const locale = await getLocale();
  const t = await getTranslations("PriceLists");
  const menu = await getTranslations("Menu");
  const prices = await getTranslations("Prices");
  const rows = getPriceListRows(menu);
  const formatPrice = new Intl.NumberFormat(locale === "en" ? "en-GB" : "hr-HR", { style: "currency", currency: "EUR" });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-3 text-emerald-50/80">{t("intro")}</p>
      <div className="no-print my-6 flex flex-wrap items-center gap-4">
        <a href={`/${locale}/cjenici/cjenik.csv`} download className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm hover:bg-emerald-500/20">
          {t("download")}
        </a>
        <PrintButton />
        <Link href="/" className="text-sm underline underline-offset-4">{t("back")}</Link>
      </div>
      <div className="print-card overflow-x-auto rounded-2xl border border-white/10 bg-black/25">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{t("title")}</caption>
          <thead className="border-b border-white/10 text-emerald-50/70">
            <tr>
              <th scope="col" className="hidden p-3 sm:table-cell">{t("category")}</th>
              <th scope="col" className="p-3">{t("name")}</th>
              <th scope="col" className="p-3">{t("measure")}</th>
              <th scope="col" className="p-3 text-right"><abbr title={prices("regular")} className="no-underline">{prices("regularShort")}</abbr></th>
              <th scope="col" className="p-3 text-right"><abbr title={prices("anchor")} className="no-underline">{prices("anchorShort")}</abbr></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="hidden p-3 text-emerald-50/70 sm:table-cell">{row.category}</td>
                <th scope="row" className="p-3 font-medium">{row.name}</th>
                <td className="whitespace-nowrap p-3 text-emerald-50/70">{row.measure}</td>
                <td className="whitespace-nowrap p-3 text-right tabular-nums">{formatPrice.format(row.regularPrice)}</td>
                <td className="whitespace-nowrap p-3 text-right tabular-nums">{formatPrice.format(row.anchorPrice)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-emerald-50/70">{prices("note")}</p>
    </main>
  );
}
