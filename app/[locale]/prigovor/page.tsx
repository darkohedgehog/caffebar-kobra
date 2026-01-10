import { getTranslations } from "next-intl/server";

export default async function ComplaintPage() {
  const t = await getTranslations("Complaint");

  const email = "gomitrovi@gmail.com";
  const subject = encodeURIComponent(t("subject"));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-emerald-50/90">
        {t("title")}
      </h1>

      <p className="mt-3 text-emerald-50/70">
        {t("intro")}
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-5 text-sm leading-relaxed">
        <p className="text-emerald-50/70">
          {t("emailText")}
        </p>

        <a
          href={`mailto:${email}?subject=${subject}`}
          className="mt-3 inline-block rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-300 transition hover:bg-emerald-500/20 hover:text-emerald-200"
        >
          {email}
        </a>
      </div>
    </main>
  );
}