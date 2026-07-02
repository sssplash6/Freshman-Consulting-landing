/**
 * Where every "Let's connect" CTA points. Configure via NEXT_PUBLIC_BOOKING_URL
 * (Calendly / cal.com / t.me / wa.me / mailto:). Falls back to "#".
 */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

/** Canonical origin for metadata (hreflang alternates, OG). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/** Section anchor ids — keep in sync with nav links in content. */
export const SECTION_IDS = {
  hero: "top",
  stakes: "stakes",
  about: "about",
  caseStudies: "case-studies",
  process: "process",
} as const;

/** Supported locales. Russian is the default (business audience in UZ). */
export const LOCALES = ["ru", "en", "uz"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Short labels for the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  ru: "РУ",
  en: "EN",
  uz: "UZ",
};
