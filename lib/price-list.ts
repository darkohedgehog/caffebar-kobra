import { MENU } from "@/data/menu";
import { formatMeasure } from "@/utils/formatMeasure";

type Translate = (key: string) => string;

export function getPriceListRows(t: Translate) {
  return MENU.flatMap((section) =>
    section.items.map((item) => ({
      id: item.id,
      category: t(`sections.${section.id}`),
      name: t(`items.${item.id}`),
      measure: formatMeasure(item.measure) ?? "",
      regularPrice: item.price,
      anchorPrice: item.price,
    }))
  );
}

export function serializeCsv(rows: readonly (readonly string[])[]): string {
  const escape = (value: string) => {
    // Keep spreadsheet applications from interpreting text as formulas.
    const safe = /^[=+@\-\t\r\n]/.test(value) ? `'${value}` : value;
    return `"${safe.replaceAll('"', '""')}"`;
  };
  return "\uFEFF" + rows.map((row) => row.map(escape).join(";")).join("\r\n") + "\r\n";
}
