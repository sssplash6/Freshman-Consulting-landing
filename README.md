# Freshman Consulting — Landing Page

Marketing site for **Freshman Consulting** — we work with businesses, find the
inefficiencies in their workflows, and fix them.

Built on the approved **Monolith** brand direction: ink + white + ivory, a
single typeface (Manrope), one red accent (#E5484D, with #CE2C31 as the
AA-safe step for small text on light). Russian-first, with English and Uzbek
at `/en` and `/uz`.

## Stack

- **Next.js 15** (App Router) · **React 19**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **TypeScript** (strict)
- Deploy target: **Vercel**

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000 → redirects to /ru
pnpm build        # production build (statically generates /ru /en /uz)
```

## Configure the CTAs

Every "Let's connect" button points at one URL. Set it once:

```bash
cp .env.example .env.local
# then edit:
NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-handle   # or t.me/…, mailto:…
NEXT_PUBLIC_SITE_URL=https://your-domain.com           # for hreflang/OG metadata
```

Unset, the buttons fall back to `#`.

## The hero video

The hero plays `public/hero.mp4` (autoplay, muted, looped) with
`public/hero-poster.jpg` as the fallback poster. Both are **generated
placeholders** — when the real footage is shot, overwrite those two files and
nothing else changes. Reduced-motion visitors and broken-video cases get the
poster.

## Project layout

```
app/[locale]/       Layout + page per locale (ru default, en, uz)
components/
  primitives/       Container, Section, Eyebrow, Button
  sections/         One component per landing-page section
lib/
  config.ts         BOOKING_URL, SITE_URL, locales, section anchor ids
  content/          Typed copy dictionaries: ru.ts (source of truth), en.ts, uz.ts
  utils/            cn() classname helper
docs/specs/         Approved design spec
```

## Editing copy

All user-facing text lives in `lib/content/{ru,en,uz}.ts`, typed by
`lib/content/types.ts`. Components never hardcode strings. Russian is the
source of truth — edit it first, mirror the change in `en.ts` / `uz.ts`, and
TypeScript will flag any missing keys.

## Before launch

- Replace `public/hero.mp4` + `public/hero-poster.jpg` with the real shoot.
- Verify the anonymized case-study wording and results with the real clients.
  (The stakes statistics are already source-verified: Smartsheet 2017,
  Asana 2021, McKinsey Global Institute 2012 & 2017.)
- Set `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_SITE_URL`.
