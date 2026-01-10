"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

function isStandaloneMode(): boolean {
  if (typeof window === "undefined") return false;

  // iOS Safari (Add to Home Screen)
  const iosStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

  // Modern browsers (Android/Chrome, etc.)
  const displayModeStandalone =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(display-mode: standalone)").matches;

  return iosStandalone || displayModeStandalone;
}

export default function PwaInstallBanner() {
  const t = useTranslations("PWA");

  const isIOS = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
  }, []);

  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    // Ako je već instalirano, nema potrebe da smara
    if (isStandaloneMode()) return false;

    // Ako je korisnik dismiss-ovao ranije, ne prikazuj
    const dismissed = window.localStorage.getItem("pwa_install_dismissed") === "1";
    if (dismissed) return false;

    // iOS nema beforeinstallprompt -> pokaži hint odmah
    const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    return isiOS;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isStandaloneMode()) return;

    const dismissed = window.localStorage.getItem("pwa_install_dismissed") === "1";
    if (dismissed) return;

    const handler = (e: Event) => {
      // Browser šalje BeforeInstallPromptEvent, TS ga ne zna bez .d.ts,
      // pa radimo safe cast na naš global tip.
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Optional: ako želiš da se banner pojavi i kad event ne dođe odmah (često),
    // možeš uključiti fallback posle npr. 2s, ali ja ovo ostavljam OFF da ne smara.
    // const timer = window.setTimeout(() => {
    //   if (!isIOS) setVisible(true);
    // }, 2000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      // window.clearTimeout(timer);
    };
  }, [isIOS]);

  const dismiss = () => {
    localStorage.setItem("pwa_install_dismissed", "1");
    setVisible(false);
  };

  const install = async () => {
    if (!deferred) return;

    await deferred.prompt();
    const choice = await deferred.userChoice;

    if (choice.outcome === "accepted") {
      localStorage.setItem("pwa_install_dismissed", "1");
      setVisible(false);
    } else {
      // Korisnik dismiss-ovao prompt — ostavi mogućnost da se event ponovo setuje
      setDeferred(null);
    }
  };

  // Na Android/Chrome, dugme ima smisla samo kad imamo deferred event
  const canInstall = !isIOS && !!deferred;

  if (!visible) return null;

  return (
    <div
      id="pwa-install-banner"
      className="no-print fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-2xl"
      role="region"
      aria-label={t("title")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-emerald-50/90">{t("title")}</div>

          <div className="mt-1 text-xs text-emerald-50/70">
            {t("desc")}
            {isIOS ? ` ${t("iosHint")}` : ""}
          </div>
        </div>

        <button
          onClick={dismiss}
          className="text-emerald-50/60 hover:text-emerald-50/90 text-sm"
          aria-label={t("dismiss")}
        >
          ✕
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          onClick={dismiss}
          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-emerald-50/80 transition hover:bg-white/5"
        >
          {t("dismiss")}
        </button>

        {!isIOS && (
          <button
            onClick={install}
            disabled={!canInstall}
            className="rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-2 text-xs text-emerald-50/90 transition hover:bg-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            title={!canInstall ? t("manualHint") : undefined}
          >
            {t("install")}
          </button>
        )}
      </div>
    </div>
  );
}