import type { Measure } from "@/utils/formatMeasure";

export type MenuItem = {
  id: string;         // prevod u messages -> Menu.items.<id>
  measure?: Measure;  // { value: 0.25, unit: "l" } ili string
  price: number;      // EUR
};

export type MenuSection = {
  id: "alcohol" | "beer" | "wine" | "soft" | "hot";
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "alcohol",
    items: [
      { id: "pelinkovac", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "konjak", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "vodka", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "vinjak", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "travarica", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "komovica", measure: { value: 0.05, unit: "l" }, price: 2.0 },
      { id: "gin", measure: { value: 0.05, unit: "l" }, price: 2.1 },
      { id: "rum", measure: { value: 0.05, unit: "l" }, price: 2.0 },

      { id: "stock", measure: { value: 0.03, unit: "l" }, price: 1.8 },
      { id: "ballantines", measure: { value: 0.03, unit: "l" }, price: 2.2 },
      { id: "jack_daniels", measure: { value: 0.03, unit: "l" }, price: 2.5 },
      { id: "jagermeister", measure: { value: 0.03, unit: "l" }, price: 2.1 },
      { id: "viljamovka", measure: { value: 0.03, unit: "l" }, price: 2.1 },
      { id: "sljivovica", measure: { value: 0.03, unit: "l" }, price: 2.1 },
      { id: "dunja", measure: { value: 0.03, unit: "l" }, price: 2.1 },
      { id: "kovilj_sljiva", measure: { value: 0.03, unit: "l" }, price: 2.8 },
    ],
  },

  {
    id: "beer",
    items: [
      { id: "beer_draft", measure: { value: 0.5, unit: "l" }, price: 2.5 },
      { id: "heineken", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "jelen", measure: { value: 0.33, unit: "l" }, price: 2.4 },
    ],
  },

  {
    id: "wine",
    items: [
      { id: "wine_white", measure: { value: 1.0, unit: "l" }, price: 13.0 },
      { id: "wine_red", measure: { value: 1.0, unit: "l" }, price: 13.0 },
    ],
  },

  {
    id: "soft",
    items: [
      { id: "coca_cola", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "sprite", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "cockta", measure: { value: 0.275, unit: "l" }, price: 2.4 },
      { id: "natural_juices", measure: { value: 0.2, unit: "l" }, price: 2.5 },
      { id: "tonic", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "schweppes", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "orangina", measure: { value: 0.25, unit: "l" }, price: 2.6 },
      { id: "red_bull", measure: { value: 0.25, unit: "l" }, price: 3.0 },
      { id: "cedevita", measure: { value: 0.2, unit: "l" }, price: 1.7 },
      { id: "fanta", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "mineral_water_small", measure: { value: 0.25, unit: "l" }, price: 1.5 },
      { id: "mineral_water_big", measure: { value: 1.0, unit: "l" }, price: 3.0 },
      { id: "flavoured_water", measure: { value: 0.25, unit: "l" }, price: 2.0 },
      { id: "iced_tea", measure: { value: 0.25, unit: "l" }, price: 2.4 },
      { id: "lemonade", measure: { value: 0.2, unit: "l" }, price: 1.7 },
      { id: "hidra", measure: { value: 0.33, unit: "l" }, price: 2.4 },
    ],
  },

  {
    id: "hot",
    items: [
      { id: "coffee", price: 1.6 },
      { id: "coffee_whipped_cream", price: 1.6 },
      { id: "coffee_cream", price: 1.6 },
      { id: "cappuccino", price: 1.8 },
      { id: "nescafe", price: 1.8 },
      { id: "tea", price: 1.5 },
      { id: "cocoa", price: 1.8 },
    ],
  },
];