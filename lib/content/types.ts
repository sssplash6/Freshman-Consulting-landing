/**
 * Content schema for the Freshman Consulting landing page.
 *
 * All user-facing copy lives in locale dictionaries that satisfy `SiteContent`
 * (`ru.ts` is the source of truth; `en.ts` / `uz.ts` mirror it). Components
 * never hardcode strings — the page renders entirely from one dictionary.
 */

export interface LabeledLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  /** Source name + year, rendered as fine print under the stat. */
  source?: string;
}

export interface NumberedItem {
  num: string;
  title: string;
  body: string;
}

export interface CaseStudy {
  /** Anonymized client descriptor, e.g. "Барбершоп, Ташкент". */
  sector: string;
  problem: string;
  built: string;
  result: string;
}

export interface SiteContent {
  locale: string;

  meta: {
    title: string;
    description: string;
    /** Skip-navigation link label (a11y). */
    skipToContent: string;
  };

  brand: {
    wordmark: string; // "Freshman"
    suffix: string; // "CONSULTING"
    location: string; // "Ташкент" / "Tashkent" / "Toshkent"
  };

  nav: {
    links: LabeledLink[];
    cta: string;
    /** aria-label for the language switcher nav. */
    langAriaLabel: string;
    menuOpen: string;
    menuClose: string;
  };

  hero: {
    /** One-line headline overlaid on the video. */
    tagline: string;
    sub: string;
    scrollCue: string;
    unmute: string;
    mute: string;
  };

  stakes: {
    label: string;
    title: string;
    intro: string;
    items: Stat[];
  };

  about: {
    label: string;
    title: string;
    body: string;
    points: { title: string; body: string }[];
  };

  /** Differentiation vs Big4 / local consultants / freelancers. */
  difference: {
    label: string;
    title: string;
    /** The positioning statement, e.g. "We help businesses raise financing…". */
    positioning: string;
    items: { versus: string; body: string }[];
  };

  /** Consulting-style proof numbers ($10M+ advised, 20+ mandates, …). */
  credentials: {
    label: string;
    title: string;
    items: Stat[];
  };

  /** Client / project wordmark strip. Renders only when names is non-empty. */
  clients: {
    label: string;
    names: string[];
  };

  caseStudies: {
    label: string;
    title: string;
    rowLabels: { problem: string; built: string; result: string };
    items: CaseStudy[];
  };

  /** Free finance guides (lead magnets). */
  guides: {
    label: string;
    title: string;
    intro: string;
    comingSoon: string;
    items: { title: string; blurb: string }[];
  };

  team: {
    label: string;
    title: string;
    intro: string;
    members: { name: string; role: string; bio: string }[];
  };

  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };

  process: {
    label: string;
    note: string;
    steps: NumberedItem[];
  };

  finalCta: {
    title: string;
    sub: string;
    cta: string;
  };

  footer: {
    left: string;
    right: string;
  };
}
