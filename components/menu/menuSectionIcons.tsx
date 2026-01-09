import {
  Beer,
  Wine,
  Coffee,
  Martini,
  GlassWater,
} from "lucide-react";

export const MENU_SECTION_ICONS = {
  alcohol: Martini,
  beer: Beer,
  wine: Wine,
  soft: GlassWater,
  hot: Coffee,
} as const;