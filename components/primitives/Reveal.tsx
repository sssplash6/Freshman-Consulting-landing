"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Fades + rises its children the first time they scroll into view, then stops
 * observing. Stagger neighbours with `delay` (ms).
 *
 * Progressive enhancement: children render fully visible on the server and stay
 * visible for anyone with JS off or `prefers-reduced-motion`. The hidden→reveal
 * behaviour is only "armed" after mount, so wrap BELOW-the-fold content only —
 * arming an element already on screen would flash it. (The hero animates on
 * load via CSS instead; see the `hero-in` keyframe in globals.css.)
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "li" | "article" | "section" | "figure";
  delay?: number;
  className?: string;
}) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = armed && !inView;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        armed &&
          "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]",
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
