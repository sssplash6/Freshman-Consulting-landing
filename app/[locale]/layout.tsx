import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { redirect } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, SITE_URL, isLocale } from "@/lib/config";
import { getContent } from "@/lib/content";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"], // cyrillic covers RU + UZ (Latin covers UZ Latin script)
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: "website",
      locale,
      siteName: "Freshman Consulting",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect(`/${DEFAULT_LOCALE}`);

  const content = getContent(locale);

  return (
    <html lang={locale} className={manrope.variable}>
      <body className="antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          {content.meta.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
