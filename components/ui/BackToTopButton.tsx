"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function BackToTopButton({
  showAfter = 500,
}: {
  showAfter?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "rounded-full border border-white/10 bg-black/35 backdrop-blur-md",
        "px-4 py-3 text-sm text-emerald-50/90 shadow-2xl transition",
        "hover:bg-emerald-500/10 hover:border-emerald-400/25",
        "drop-shadow-[0_0_18px_rgba(34,197,94,0.12)]",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      )}
    >
      ↑ Top
    </button>
  );
}