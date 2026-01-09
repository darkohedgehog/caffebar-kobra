"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PrintButton from "@/components/ui/PrintButton";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("HeroSection");

  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-6 sm:pt-14 sm:pb-10">
        <div className="relative mx-auto flex flex-col items-center text-center">
          {/* Glow aura behind logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.35), transparent 65%)",
            }}
          />

          {/* Logo banner (click -> home) */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -6, 0], rotate: [0, 0.4, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="drop-shadow-[0_0_22px_rgba(34,197,94,0.25)]"
            >
              <Link
                href="/"
                aria-label="Povratak na početnu stranicu"
                className="inline-block cursor-pointer"
              >
                <Image
                  src="/assets/logo-kobra-transparent.png"
                  alt="Caffe Bar Kobra"
                  width={900}
                  height={360}
                  priority
                  className="h-auto w-64 sm:w-105 md:w-130 object-contain transition hover:drop-shadow-[0_0_28px_rgba(34,197,94,0.45)]"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <p className="mt-4 max-w-md text-sm sm:text-base text-emerald-50/80">
            {t("welcome")}
          </p>

          {/* CTA */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm text-emerald-50/90 backdrop-blur-sm transition hover:border-emerald-400/30 hover:bg-emerald-500/10"
            >
              {t("contact")}
            </Link>
            <PrintButton />
          </div>
        </div>
      </div>

      {/* Subtle divider glow */}
      <div
        aria-hidden="true"
        className="mx-auto h-px max-w-5xl bg-linear-to-r from-transparent via-emerald-400/25 to-transparent"
      />
    </section>
  );
}