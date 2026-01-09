"use client";

import Image from "next/image";
import LangSwitch from "./LangSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Caffe Bar Kobra Home">
          <Image
            src="/assets/logo-kobra.png"
            alt="Kobra Caffe Bar"
            width={120}
            height={40}
            priority
            className="h-auto w-auto object-contain transition drop-shadow-[0_0_0_rgba(34,197,94,0)] hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.55)]"
          />
          </Link>    
          {/* Optional: small title (desktop only) */}
          <div className="hidden sm:block text-emerald-100/85 font-semibold tracking-wide text-2xl drop-shadow-[0_0_6px_rgba(34,197,94,0.45)]">
            Caffe Bar Kobra
          </div>
        </div>

        {/* Right: Language switch */}
        <LangSwitch />
      </div>
    </header>
  );
}