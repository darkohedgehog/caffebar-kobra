"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type SectionLink = { id: string; title: string };

export default function MenuChipsNav({
  sections,
  offset = 84, // približno visina headera + malo lufta
}: {
  sections: SectionLink[];
  offset?: number;
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // uzmi one koji su trenutno vidljivi, pa biraj “najbliži vrhu”
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        // aktiviraj kad sekcija uđe u “gornju zonu”
        rootMargin: `-${offset + 10}px 0px -70% 0px`,
        threshold: [0.01, 0.1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-40 -mx-4 px-4 pt-3 pb-2">
      <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md shadow-xl">
        <div className="flex gap-2 overflow-x-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                  "border border-white/10 bg-black/20 text-emerald-50/80 hover:bg-emerald-500/10 hover:border-emerald-400/25",
                  active && "bg-emerald-500/15 border-emerald-400/30 text-emerald-50 drop-shadow-[0_0_10px_rgba(34,197,94,0.25)]"
                )}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}