import { getTranslations } from "next-intl/server";

export default async function TermsPage() {
  const t = await getTranslations("Terms");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-emerald-50/90">
        {t("title")}
      </h1>

      <div className="mt-6 space-y-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-6 text-sm leading-relaxed text-emerald-50/70">
        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s1.title")}</h2>
          <p className="mt-2">{t("s1.p1", { brand: "Caffe Bar Kobra, OIB: 31613379285", domain: "www.caffebar-kobra.vercel.app" })}</p>
          <p className="mt-2">{t("s1.p2")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s2.title")}</h2>
          <p className="mt-2">{t("s2.p1", { brand: "Caffe Bar Kobra" })}</p>
          <p className="mt-2">{t("s2.p2")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s3.title")}</h2>
          <p className="mt-2">{t("s3.p1")}</p>
          <p className="mt-2">{t("s3.p2")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s4.title")}</h2>
          <p className="mt-2">{t("s4.p1")}</p>
          <p className="mt-2">{t("s4.p2")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s5.title")}</h2>
          <p className="mt-2">{t("s5.p1")}</p>
          <p className="mt-2">{t("s5.p2")}</p>
          <p className="mt-2">{t("s5.p3")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s6.title")}</h2>
          <p className="mt-2">{t("s6.p1")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s7.title")}</h2>
          <p className="mt-2">{t("s7.p1")}</p>
        </section>

        <section>
          <h2 className="font-semibold text-emerald-50/90">{t("s8.title")}</h2>
          <p className="mt-2">{t("s8.p1")}</p>
        </section>
      </div>
    </main>
  );
}