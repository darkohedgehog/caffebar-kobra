// app/[locale]/page.tsx (ili gde ti već stoji)
import { getTranslations } from "next-intl/server";

import { MENU } from "@/data/menu";
import MenuSection from "@/components/menu/MenuSection";
import MenuChipsNav from "@/components/menu/MenuChipsNav";
import BackToTopButton from "@/components/ui/BackToTopButton";
import HeroSection from "@/components/mainpage/HeroSection";

export default async function HomePage() {
  const t = await getTranslations("Menu");

  const sections = MENU.map((s) => ({
    id: s.id,
    title: t(`sections.${s.id}`),
  }));

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16">
      <HeroSection />

      {/* Client component – prima samo plain data */}
      <MenuChipsNav sections={sections} />

      <div id="menu" className="mt-4 space-y-8">
        {MENU.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </div>

      <BackToTopButton />
    </main>
  );
}