"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RiNextjsFill } from "react-icons/ri";
import { GiHedgehog } from "react-icons/gi";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" aria-label="Caffe Bar Kobra - home">
            <Image
              src="/assets/logo-kobra.png"
              alt="Caffe Bar Kobra"
              width={120}
              height={40}
              priority
              className="h-auto w-auto object-contain opacity-90 transition hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.35)]"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-emerald-50/80">
            <Link href="/uvjeti-koristenja" className="transition hover:text-emerald-300">
              {t("links.terms")}
            </Link>
            <Link href="/prigovor" className="transition hover:text-emerald-300">
              {t("links.complaint")}
            </Link>
            <Link href="/contact" className="transition hover:text-emerald-300">
              {t("links.contact")}
            </Link>
          </nav>
        </div>

        <div className="my-6 h-px w-full bg-linear-to-r from-transparent via-emerald-400/20 to-transparent" />

        <div className="space-y-2 text-center text-xs leading-relaxed text-emerald-50/60">
          <p>
            {t("legal.vat")} {t("legal.complaintsBook")}{" "}
            <Link
              href="/prigovor"
              className="underline underline-offset-2 transition hover:text-emerald-300"
            >
              {t("links.complaint")}
            </Link>
            .
          </p>

          <p>{t("legal.noAlcoholUnder18")}</p>

          <p className="text-emerald-50/50">
            {t("legal.validFrom", { date: "01.01.2026." })}
          </p>
        </div>
        <div className="my-6 h-px w-full bg-linear-to-r from-transparent via-emerald-400/20 to-transparent" />
         {/* POWERED BY */}
        <div className="flex items-center justify-center gap-3 mt-12 text-emerald-700 text-sm">
          Powered by
          <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <RiNextjsFill className="w-6 h-6 hover:text-emerald-400 transition" />
          </Link>
        </div>

        {/* DEVELOPED BY */}
        <div className="flex items-center justify-center gap-3 mt-4 text-emerald-700 text-sm">
          Developed by Hedgehog
          <Link
            href="https://www.hedgehogwebdev.com"
            target="_blank"
            rel="noreferrer"
          >
            <GiHedgehog className="w-6 h-6 hover:scale-110 hover:text-emerald-400 transition" />
          </Link>
        </div>
        {/* COPYRIGHT */}
        <div className="text-center text-emerald-400 text-sm my-8">
          © {new Date().getFullYear()} Caffe Bar Kobra. Sva prava zadržana.
        </div>
        {/* SITEMAP */}
        <div className="text-center mt-4">
          <Link
            href="/sitemap.xml"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500/50 hover:text-emerald-300 transition text-sm"
          >
            sitemap.xml
          </Link>
        </div>
      </div>
    </footer>
  );
}