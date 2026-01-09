export type MeasureUnit = "l" | "ml" | "kom" | "salica" | "porcija";

export type Measure =
  | string
  | number
  | { value: number; unit?: MeasureUnit };

type FormatMeasureOptions = {
  /** Ako dobiješ number bez unita, tretira se kao litra (0.33 -> 0,33 l) */
  defaultUnit?: MeasureUnit;
  /** Koliko decimala max za litre */
  maxFractionDigits?: number;
};

export function formatMeasure(
  measure?: Measure,
  opts: FormatMeasureOptions = {}
): string | null {
  if (measure === undefined || measure === null) return null;

  const { defaultUnit = "l", maxFractionDigits = 2 } = opts;

  // Ako je već string (npr "0,33 l" ili "šalica"), samo vrati trimmed
  if (typeof measure === "string") {
    const s = measure.trim();
    return s.length ? s : null;
  }

  // Ako je number, tretiraj kao litre po defaultu
  if (typeof measure === "number") {
    return formatValueWithUnit(measure, defaultUnit, maxFractionDigits);
  }

  // Object oblik
  const unit = measure.unit ?? defaultUnit;
  return formatValueWithUnit(measure.value, unit, maxFractionDigits);
}

function formatValueWithUnit(
  value: number,
  unit: MeasureUnit,
  maxFractionDigits: number
): string {
  // specijalni “unit-i” koji nisu volumeni
  if (unit === "salica") return "šalica";
  if (unit === "kom") return "kom";
  if (unit === "porcija") return "porcija";

  // volumen
  const locale = "hr-HR";

  if (unit === "ml") {
    // ml obično bez decimala
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0,
    }).format(value);
    return `${formatted} ml`;
  }

  // litre
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: maxFractionDigits,
  }).format(value);

  return `${formatted} l`;
}