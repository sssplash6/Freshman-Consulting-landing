# Humonur Systems — Landing Page

The marketing site for **Humonur Systems**, an AI agency that builds custom AI
systems so a business never misses a customer.

Built from the approved **Monolith** brand direction: ink + white + ivory, a
single typeface (Manrope), one whisper of clay. Next.js + Tailwind, English-first
and structured for Russian / Uzbek to follow.

## Stack

- **Next.js 15** (App Router) · **React 19**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **TypeScript** (strict)
- Deploy target: **Vercel**

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
```

## Configure the "Book a call" CTAs

Every CTA points at one URL. Set it once:

```bash
cp .env.example .env.local
# then edit:
NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-handle   # or t.me/…, wa.me/…, mailto:…
```

Unset, the buttons fall back to `#`.

## Project layout

```
app/                Next.js App Router (layout, page, globals.css)
components/
  primitives/       Container, Section, Eyebrow, Button
  sections/         One component per landing-page section
lib/
  config.ts         BOOKING_URL, section anchor ids
  content/          Typed copy dictionary (i18n seam) — en.ts today
  utils/            cn() classname helper
_reference/         Original mockup + screenshots (not shipped)
docs/               Design spec
```

## Editing copy

All user-facing text lives in `lib/content/en.ts` (typed by
`lib/content/types.ts`). Components never hardcode strings — change copy there.

## Adding a language

1. Copy `lib/content/en.ts` → `ru.ts` / `uz.ts`, translate the values.
2. Register it in `lib/content/index.ts` and make the resolver locale-aware.

The font already carries Cyrillic, so nothing else changes.

## Before launch

The trust logos (`Northbridge`, `Valent Health`, …) and the headline metrics
(`$4M+`, `5×`, `40k`, `90%`) are **placeholders from the mockup**. Replace them
with real clients and verified numbers in `lib/content/en.ts` before going
public.
