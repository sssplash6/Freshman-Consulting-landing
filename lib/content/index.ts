import type { SiteContent } from "./types";
import type { Locale } from "@/lib/config";
import { DEFAULT_LOCALE } from "@/lib/config";
import { ru } from "./ru";
import { en } from "./en";
import { uz } from "./uz";

const dictionaries: Record<Locale, SiteContent> = { ru, en, uz };

/** Resolve the dictionary for a locale; unknown values fall back to Russian. */
export function getContent(locale: string = DEFAULT_LOCALE): SiteContent {
  return dictionaries[locale as Locale] ?? dictionaries[DEFAULT_LOCALE];
}

export type { SiteContent } from "./types";
