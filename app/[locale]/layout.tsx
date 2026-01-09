import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PwaInstallBanner from "@/components/pwa/PwaInstallBanner";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caffe Bar Kobra",
  description: "Caffe bar Kobra smješten u samom centru grada Vukovara",
};

const SUPPORTED_LOCALES = ["hr", "en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <PwaInstallBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}