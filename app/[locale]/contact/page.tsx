import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  const address = "Vukovar – Tržni centar, lokal 15";
  const email = "info@caffebar-kobra.hr"; // ⬅️ promijeni na pravi

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-emerald-50/90">{t("title")}</h1>
      <p className="mt-3 text-emerald-50/70">{t("intro")}</p>

      <div className="mt-6 grid gap-4">
        {/* Address */}
        <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-5">
          <div className="flex items-start gap-3">
            {/* MapPin icon (inline svg, bez client komponente) */}
            <svg
              className="mt-0.5 h-5 w-5 text-emerald-400/80 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <div>
              <div className="text-sm font-semibold text-emerald-50/90">
                {t("addressLabel")}
              </div>
              <div className="mt-1 text-sm text-emerald-50/70">{address}</div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-5">
          <div className="flex items-start gap-3">
            {/* Mail icon (inline svg) */}
            <svg
              className="mt-0.5 h-5 w-5 text-emerald-400/80 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>

            <div>
              <div className="text-sm font-semibold text-emerald-50/90">
                {t("emailLabel")}
              </div>

              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20 hover:text-emerald-200"
              >
                {email}
              </a>

              <p className="mt-2 text-xs text-emerald-50/55">{t("emailHint")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}