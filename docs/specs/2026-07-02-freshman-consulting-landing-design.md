# Freshman Consulting — Landing Page Design

**Date:** 2026-07-02 · **Status:** Approved by Abdulhamid

## What this is

Single-page marketing site for **Freshman Consulting** — an agency that works
with businesses, finds inefficiencies in their workflows, and fixes them.
The page follows a hook → stakes → relief → authority → plan → ask narrative.

## Codebase strategy

Started from the Humonur Systems landing codebase (same author, approved
"Monolith" brand direction: ink + white + ivory, Manrope, one clay accent).
Reused: primitives (`Container`, `Section`, `Eyebrow`, `Button`), design
tokens in `app/globals.css`, `cn()` helper, typed content-dictionary pattern.
Sections not fitting the new narrative were not carried over.

## Stack

- Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript strict
- Deploy target: Vercel

## i18n architecture

- Route-based locales: `app/[locale]/` with `ru` (default), `en`, `uz`.
  All three statically generated (`generateStaticParams`).
- `/` redirects to `/ru` (next.config redirect). Unknown locale → redirect `/ru`.
- Nav language switcher navigates to the same page under the chosen locale
  (URL changes to `/en` etc.). No client-side content swapping, no stored state.
- Dictionaries `lib/content/{ru,en,uz}.ts` all satisfy one `SiteContent`
  interface (`lib/content/types.ts`). Components never hardcode strings.
- `hreflang` alternates in per-locale metadata. Manrope carries Cyrillic.

## Page structure

| # | Section | Anchor | Content |
|---|---------|--------|---------|
| 1 | Nav | — | Logo left · center links: Latest updates → `#case-studies`, About us → `#about`, What we do → `#process` · right: language switcher (RU/EN/UZ) + **Let's connect** (booking URL). Transparent over video, solid on scroll. |
| 2 | Hero video | `#top` | Full-viewport `<video>` autoplay/muted/loop/playsInline, unmute toggle, poster fallback. Video at `public/hero.mp4` — placeholder poster until the real footage is shot (file drop, zero code changes). Minimal overlay: wordmark, one-line tagline, scroll cue. `prefers-reduced-motion` → poster only. |
| 3 | Stakes | `#stakes` | "What's at stake": 3–4 large statistics on what workflow inefficiency costs a business + one framing line each. Placeholder numbers clearly marked until verified. |
| 4 | Relief / About | `#about` | The turn: who Freshman Consulting is, one-sentence promise (we find the inefficiencies and fix them). Calm, short — contrast against stakes. |
| 5 | Authority / Case studies | `#case-studies` | 2–3 cards: problem → what we built → result metric. Structured placeholder slots for real client stories. |
| 6 | What we do / Process | `#process` | 4 numbered steps: ① Free assessment of operations ② Report + proposed solutions ③ We build it (if wanted) ④ Ongoing partnership. |
| 7 | Footer CTA | — | Big "Let's connect" block → booking URL, contact links, small print. |

## Configuration

- `NEXT_PUBLIC_BOOKING_URL` drives every CTA (Cal.com/Calendly/t.me/mailto).
  Falls back to `#` when unset.
- `SECTION_IDS` in `lib/config.ts` keeps anchors and nav in sync.

## Error handling / edge cases

- Missing `hero.mp4` → poster (or token gradient) renders; page never breaks.
- Unknown locale in URL → redirect to `/ru`.
- Reduced-motion users get the static poster, no autoplay.

## Verification

- `pnpm build` passes; `/ru`, `/en`, `/uz` all render.
- Visual check at desktop and mobile widths.
- Video-fallback check by removing the file.

## Before launch (owner: Abdulhamid)

- Shoot and drop in `public/hero.mp4` (+ real poster frame).
- Replace placeholder stakes statistics with verified figures.
- Replace case-study placeholders with real client stories.
- Set `NEXT_PUBLIC_BOOKING_URL` to the real booking link.
