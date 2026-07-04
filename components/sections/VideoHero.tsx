"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/primitives/Container";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";
import { cn } from "@/lib/utils/cn";

const VIDEO_SRC = "/hero.mp4";
const POSTER_SRC = "/hero-poster.jpg";

/**
 * Full-viewport hero video. Autoplays muted (the only autoplay browsers
 * allow); a toggle unmutes. Falls back to the poster image when the video
 * is missing/broken or the visitor prefers reduced motion. The real footage
 * ships later — swapping it in is a file drop at public/hero.mp4.
 */
export function VideoHero({ content }: { content: SiteContent }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [videoOk, setVideoOk] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { hero } = content;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // The SSR'd <video> starts loading before React hydrates, so a load error
  // can fire before onError is attached. Catch that race on mount.
  useEffect(() => {
    if (videoRef.current?.error) setVideoOk(false);
  }, []);

  const showVideo = videoOk && !reducedMotion;

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative h-svh min-h-[560px] overflow-hidden bg-ink text-paper"
    >
      {showVideo ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoOk(false)}
          className="absolute inset-0 h-full w-full object-cover animate-hero-drift"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={POSTER_SRC}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Legibility gradient: darker at top (nav) and bottom (headline).
          Strong enough that overlay text stays AA-readable over bright
          footage — the real video's brightness is not under our control. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/15 to-ink/80"
      />

      {/* Headline overlay */}
      <Container className="relative flex h-full flex-col justify-end pb-24 md:pb-28">
        <h1 className="max-w-[18ch] animate-hero-in text-[clamp(2.1rem,6vw,4rem)] font-extrabold leading-[1.04] tracking-display text-paper">
          {hero.tagline}
        </h1>
        <p className="mt-4 max-w-[44ch] animate-hero-in text-[17px] leading-relaxed text-paper/75 [animation-delay:130ms] md:text-[19px]">
          {hero.sub}
        </p>
      </Container>

      {/* Sound toggle */}
      {showVideo && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-10 border border-paper/30 bg-ink/40 px-4 py-2 text-[13px] font-semibold text-paper/90 backdrop-blur-sm transition-colors hover:border-paper/70 md:bottom-8 md:right-10"
        >
          {muted ? hero.unmute : hero.mute}
        </button>
      )}

      {/* Scroll cue */}
      <a
        href={`#${SECTION_IDS.stakes}`}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper/80 transition-colors hover:text-paper md:flex"
      >
        {hero.scrollCue}
        <span
          aria-hidden
          className={cn("block h-2 w-2 rounded-full bg-accent", "animate-pulse-dot")}
        />
      </a>
    </section>
  );
}
