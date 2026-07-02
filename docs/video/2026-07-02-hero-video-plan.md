# Hero Video — Content Plan

**Concept: «Тот же прилавок, два дня» (Same Counter, Two Days)**
2026-07-02 · Research: 17-agent workflow (5 lenses → completeness critic → adversarial fact-check).
Locked decisions: real footage + VFX, **no one fronting camera**; **Russian voiceover** + per-locale subtitles; **~45–60s** single cut.

---

## 1. The one-sentence idea

The same three real workplaces shown twice — drowning in manual chaos, then
calm and running on the systems Freshman built — with the founder appearing
mid-film as the person behind the change, and every big number deliberately
withheld so the stats section below the video delivers the punch.

## 2. What the research settled (sourced + adversarially verified)

- **The video will be watched muted by almost everyone.** 69% watch video
  with sound off in public (Verizon Media/Publicis, n=5,616); ~85% of feed
  video plays silent. The muted cut is the *primary* deliverable; the RU
  voiceover is the unmute bonus layer. Every beat must read with zero audio.
- **The first 3 seconds carry up to 47% of a video's brand value**
  (Nielsen × 173 Brand Effect studies) and 65% of 3-second viewers reach 10s.
  Open mid-action on the strongest image. Never a logo, fade-in, or title.
- **Mobile shows only the central ~26–33% of the 16:9 frame** (object-cover
  center-crop, verified geometry). ~82% of Uzbek traffic is mobile, mostly
  arriving from Telegram. Center-punch every load-bearing subject; ignore
  rule-of-thirds. Check every setup against the iPhone 9:16 grid.
- **Telegram UI on screen is a native trust cue** — Telegram is Uzbekistan's
  dominant platform (~27M users, ~76% of internet users). The real Sartarosh
  bot taking a real booking is worth more than any VFX.
- **Flash reads as fraud in this market.** Post-2024 CIS guru convictions
  (Blinovskaya 5 yrs, Shabutdinov, Ahmadboi 13 yrs) poisoned status-symbol
  marketing. Calm, specific, documentary, work-first — the entry kit's
  natural look is an *advantage*. Do not over-gloss in post.
- **Top agency heroes are silent loops of real client work** (measured via
  ffprobe: Monks 13.1s, BASIC 19.2s, ustwo 5.9s/318KB, Locomotive 12.5s) with
  audio living behind a click. Ours is longer by choice (45–60s pitch), so the
  **first 12 seconds must work as a self-contained ambient loop** — most
  visitors scroll before the story ends, and that's fine: the page continues it.
- **The HTML headline, not the video, carries the message** (NN/g banner
  blindness: users look at moving content and don't register it). The video is
  emotion + proof. The site's localized headline does the talking.

## 3. Resolved conflicts (the judgment calls)

| Conflict | Decision |
|---|---|
| One asset vs two | **One 45–60s file with embedded RU audio** (Monks/Locomotive model): the unmute button just unmutes. No talking heads on camera → no "broken video" muted-lips problem. First 12s doubles as the ambient loop. |
| File size vs length | Locked-off tripod shots compress extremely well. Target ≤10MB: 1080p H.264 CRF≈24 @ ~1.2–1.5 Mbps ≈ 9MB for 50s. Optional AV1/WebM variant at ~half size. |
| Face first vs work first | **Work first, face mid-film** (~sec 28). The chaos and the running systems pre-earn credibility before the founder appears; brief eye-contact only at the resolve — no on-camera speech. |
| Numbers in the video | **Diegetic numbers only** (a missed-call badge ticking 7→8 on a real phone). **No editorial stats, no "%"** — the stats section directly below is the payoff. The video makes the visitor *ask* "what is this costing me?"; the page answers. |
| Burned-in text | **Zero burned-in words.** Master stays language-neutral: icons, checkmarks, calendar grids, Telegram UI. Subtitles ship as **WebVTT tracks per locale** (ru/en/uz) rendered by the site — not burned. RU voiceover lives in the audio track. |
| Real vs composited screens | **Shoot the real Uzbek bot UI** (authenticity wins locally). *Also* capture every screen setup as a clean plate + raw QuickTime screen recordings so post can swap/localize later without a re-shoot. |
| Grade | **Dark documentary grade, light HTML text** — matches the site's existing ink scrim and light-on-dark hero overlay. Keep bottom ~25% and top ~12% of frame calm and dim (headline / unmute / scroll cue / navbar live there — CSS handles the gradient, don't bake it in). |

## 4. Beat sheet (50s master @ 25fps)

> Two-column test: cover the AUDIO column — the VISUAL column alone must tell
> the whole story. It does.

| Time | VISUAL | VFX (post) | RU VOICEOVER (unmute layer) |
|---|---|---|---|
| **0–3s HOOK** | Barbershop counter, locked shot. A phone lights up mid-frame: incoming call, missed-call badge ticks 7→**8**. Blurred busy hands (clippers) behind. | Subtle vignette; badge punch-in | *(silence — one breath)* «Каждый день ваш бизнес теряет деньги. Тихо.» |
| **3–13s CHAOS** (fast cuts, 3+ scenes — this block is the standalone loop statement) | ① Paper appointment notebook, crossed-out names, pen tapping. ② Education desk at night: a *mountain* of handwritten exam sheets, tired hand, red pen. ③ Office desk: Telegram chats pinging faster than fingers can answer, spreadsheet scrolling. | Thin hairline circles/underlines flag each leak (no words) | «Пропущенный звонок. Заявка, на которую ответили слишком поздно. Вечера, съеденные ручной рутиной.» |
| **13–28s THE TURN** (match-cut mirrors of the same framings) | ① *Same counter*: phone lies calm, face-up — the **real Sartarosh bot** confirms a booking on screen; barber keeps cutting, uninterrupted. ② *Same desk*: exam stack is thin; laptop shows the grading flow finishing in seconds. ③ *Same office*: a calendar grid fills itself; chats answered; chair empty — owner gone home. | Calendar auto-fill animation; soft checkmarks; match-cut morphs | «Это не видно в отчётах. Но посмотрите, что происходит, когда процессы начинают работать сами.» |
| **28–40s PROOF + FOUNDER PIVOT** | Founder at his desk (backdrop set, RGB rim): eyes on the screen — *gaze on the work, not the lens*. Over-the-shoulder: the three real systems running. Cut: **Bilol in his barbershop**, glancing at the booking dashboard, nodding, back to his client. | Floating UI cards drift off his screen (language-neutral) | «Мы — Freshman Consulting. Мы находим, где ваши процессы текут, и чиним их. Автоматизация, интеграции, AI — там, где это окупается.» |
| **40–50s RESOLVE + LOOP SEAM** | Slow push-in on founder; he looks up to camera — two seconds, calm, no smile-acting. Cut to the quiet counter… a new booking slides in silently. Final frame ≈ world of frame one → seamless narrative loop. | Gentle settle; 10–15-frame crossfade insurance at the seam | «Сначала — бесплатный аудит. Потом — план. Дальше — система, которая работает сама. Листайте вниз — посмотрите, сколько это стоит на самом деле.» |

**VO total: ~78 words ≈ 42–48s at a calm pace.** The last line hands off to
the scroll cue and the stakes section. Record room-quiet, Lark M2, 48kHz/24-bit.

## 5. Shot list (kit-matched)

Everything locked tripod, 4K/25fps, **1/50 shutter** (Uzbekistan is 50Hz mains
— kills flicker), manual exposure + WB locked. Every setup: main take → clean
plate (subject steps out) → 2–3s handles.

**Location A — Barbershop (Bilol's), ~2h**
1. Counter hero shot: phone center-frame (hook + mirrored calm version + loop-seam booking arrival)
2. Paper notebook close-up (before) / bot dashboard on the same counter (after)
3. Bilol working + the glance-at-dashboard beat (cameo — get his consent, see §8)
4. B-roll: clippers, chair, queue/no-queue

**Location B — Desk / "education" setup, ~2h** (can be staged at home/school)
5. Exam-stack mountain at night (warm practical + COB low) / thin stack mirror
6. Grading flow on laptop screen — real UI, plus blank-screen clean plate
7. 8–10 stop-motion stills of the shrinking stack (post can animate)

**Location C — Founder desk on backdrop, ~2h**
8. Founder-at-work medium: COB+softbox key 45° slightly above eye level, wall-bounce fill, RGB rim on backdrop for separation; eyes on screen
9. The look-up-to-camera resolve (several takes; calm, no pitch energy)
10. Over-the-shoulder screens: real bots running + clean plates

**Screen recordings (no camera):** Sartarosh customer flow (iPhone QuickTime
mirror, native res), grading flow, vocab app — delivered raw for post.

**Banned imagery** (pattern-matches to template/guru): slow-mo handshakes,
skyline timelapses, stock typing, glowing AI brains, code rain, robots,
buzzword title cards.

## 6. Delivery specs

- Master: 4K 25fps → grade → deliver **1080p H.264** (libx264, CRF 23–24,
  `yuv420p`, `-movflags +faststart`), **AAC audio kept** (unmute layer), target ≤10MB.
  Optional second encode: AV1/WebM listed first in `<source>`.
- **Poster frame is a first-class deliverable**: iOS Low Power Mode blocks
  autoplay entirely (WebKit #168985) — pick a frame that works as a static
  hero (suggest the calm-counter or founder-at-work frame), export ≤200KB JPEG,
  verify the RU/UZ/EN headlines hit 4.5:1 contrast on it.
- Subtitles: `hero.ru.vtt`, `hero.en.vtt`, `hero.uz.vtt`.
- Drop-in: overwrite `public/hero.mp4` + `public/hero-poster.jpg` — zero code changes.

**Site TODOs when footage lands** (small code tasks):
1. Add `<track kind="captions">` per locale + show captions on unmute
2. Add a pause control next to unmute (WCAG 2.2.2 for >5s motion)
3. Consider `preload="none"` + poster once the real (heavier) file ships
4. Re-cut a 9:16 vertical version from the 4K master for Telegram/Instagram —
   the same footage is the ad unit, not just the hero

## 7. Music / SFX

Minimal, low, textural (unmute layer only): room tone, soft UI ticks on
checkmarks, one warm low pad after the turn. License from a royalty-free
library (Artlist/Epidemic/Uppbeat) — no trending tracks, nothing "epic".

## 8. Pre-shoot checklist (blockers, in order)

- [ ] **Bilol's consent** — filming in the shop + his cameo + being named. A filmed named client is the single strongest local trust asset.
- [ ] **Education-center / exam-paper privacy** — use prop exam sheets written by you/friends, not real student work.
- [ ] **Attribution framing** — Sartarosh/TezTekshir/SozYodla are presented as "systems we built" (true: you built them). Since they're now delegated, don't claim ongoing operation — the video only shows them *working*.
- [ ] Confirm final RU/UZ/EN headline copy so the calm bottom-left zone is sized to the longest render.
- [ ] Scout both locations for 50Hz flicker (film a 5s test, check for banding).
- [ ] Charge everything; bring gaffer tape to mark tripod feet for the mirrored match-cuts (before/after must be pixel-close — this is the concept).

## 9. What was rejected and why (so we don't relitigate)

- **Talking-head pitch** — muted lips read as broken video; guru-adjacent in this market; you chose footage+VO anyway.
- **Burned-in Russian captions** — makes UZ/EN locales second-class; VTT solves it.
- **Stats in the video** — kills the stakes-section payoff; a US-sourced "62% of calls missed" figure also failed sourcing review.
- **Bright Ramotion-style white grade** — fights the site's existing dark hero overlay design.
- **8–15s ambient-only loop** — the verified agency pattern, but you chose a 45–60s pitch; compromise is the loop-ready first 12 seconds. If analytics later show heavy sub-10s drop-off, trim to the first block — it's edited to stand alone.
