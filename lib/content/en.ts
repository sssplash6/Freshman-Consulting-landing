import type { SiteContent } from "./types";

/** English dictionary — mirrors ru.ts (the source of truth). */
export const en: SiteContent = {
  locale: "en",

  meta: {
    title: "Freshman Consulting — we find and fix what your workflows lose",
    description:
      "Freshman Consulting works with businesses to find the bottlenecks in their workflows and fix them — from a free assessment to a shipped solution and a long-term partnership.",
    skipToContent: "Skip to content",
  },

  brand: {
    wordmark: "Freshman",
    suffix: "CONSULTING",
    location: "Tashkent",
  },

  nav: {
    links: [
      { label: "Latest updates", href: "#case-studies" },
      { label: "About us", href: "#about" },
      { label: "What we do", href: "#process" },
    ],
    cta: "Let's connect",
    langAriaLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  hero: {
    tagline: "We find where your business loses money.",
    sub: "Then we fix it — process by process.",
    scrollCue: "Scroll",
    unmute: "Unmute",
    mute: "Mute",
  },

  stakes: {
    label: "What's at stake",
    title: "Inefficiency is a silent line item.",
    intro:
      "Manual busywork, duplicate data, lost leads — none of it shows up in your reports, yet it quietly writes off part of your revenue every month.",
    items: [
      {
        value: "40%+",
        label: "of workers spend at least a quarter of their week on manual, repetitive tasks",
        source: "Smartsheet, 2017",
      },
      {
        value: "60%",
        label: "of work time goes to “work about work”: coordination, status-chasing, app-switching",
        source: "Asana, Anatomy of Work, 2021",
      },
      {
        value: "1 day",
        label: "per week — nearly 20% of it — is lost to hunting for internal information and the right colleagues",
        source: "McKinsey Global Institute, 2012",
      },
      {
        value: "6 in 10",
        label: "occupations have at least 30% of activities that could be automated with existing technology",
        source: "McKinsey Global Institute, 2017",
      },
    ],
  },

  about: {
    label: "About us",
    title: "It's fixable. It's what we do.",
    body: "Freshman Consulting puts business operations in order: we map how your work actually flows, find the bottlenecks, and remove them — with automation, integrations, and clear playbooks.",
    points: [
      {
        title: "Find",
        body: "We look at the whole process — from first inquiry to payment — and pinpoint where time, money, and customers leak out.",
      },
      {
        title: "Fix",
        body: "We design and ship the solution: automation, integrations, and AI where it actually pays for itself.",
      },
      {
        title: "Stay",
        body: "We don't vanish after launch: we support the system, measure the effect, and grow it with you.",
      },
    ],
  },

  caseStudies: {
    label: "Case studies",
    title: "What we've already done",
    rowLabels: { problem: "Problem", built: "Solution", result: "Result" },
    items: [
      {
        sector: "Barbershop, Tashkent",
        problem:
          "Bookings lived in phone calls and DMs — the front desk was overloaded and clients slipped away.",
        built:
          "A system of three Telegram bots: client booking, barber calendars, an owner dashboard — plus a cashback program.",
        result:
          "Booking runs 24/7 with no front desk; the owner sees utilization and revenue in real time.",
      },
      {
        sector: "Education center",
        problem:
          "Grading handwritten work consumed hours of teacher time every week.",
        built: "An AI service that grades handwritten exam papers automatically.",
        result: "Grading went from hours to minutes; teachers teach.",
      },
      {
        sector: "Language learning",
        problem:
          "Students lacked a simple vocabulary tool that matched the local curriculum.",
        built: "A mobile app for vocabulary learning with spaced repetition.",
        result: "1,000+ active users with zero marketing budget.",
      },
    ],
  },

  process: {
    label: "What we do",
    note: "Four steps — from first look to long-term partnership.",
    steps: [
      {
        num: "01",
        title: "Free assessment",
        body: "We take your operations apart: how leads come in, what's done by hand, where delays pile up. Free, no strings attached.",
      },
      {
        num: "02",
        title: "Report & plan",
        body: "We show you what to fix and in what order — concrete solutions with estimated impact and cost.",
      },
      {
        num: "03",
        title: "We build",
        body: "If you decide to move forward, we take delivery on ourselves: from prototype to production.",
      },
      {
        num: "04",
        title: "Partnership",
        body: "We stay your technical side: support, improvements, new points of growth.",
      },
    ],
  },

  finalCta: {
    title: "Let's find where your business is losing money.",
    sub: "Step one is a free assessment of your operations.",
    cta: "Let's connect",
  },

  footer: {
    left: "© 2026 Freshman Consulting · Tashkent",
    right: "Putting business operations in order.",
  },
};
