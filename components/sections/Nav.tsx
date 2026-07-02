"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import type { SiteContent } from "@/lib/content";
import { BOOKING_URL, LOCALES, LOCALE_LABELS } from "@/lib/config";
import { cn } from "@/lib/utils/cn";

/**
 * Fixed nav that floats transparent (light text) over the hero video and
 * turns solid paper once the visitor scrolls past it. Logo left, links
 * centered, language switcher + CTA right.
 */
export function Nav({
  content,
  locale,
}: {
  content: SiteContent;
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { brand, nav } = content;

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid whenever scrolled past the hero, or when the mobile menu is open.
  const solid = scrolled || open;

  const linkCls = cn(
    "text-[15px] font-medium transition-colors",
    solid ? "text-ink/75 hover:text-ink" : "text-paper/80 hover:text-paper",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[68px] items-center justify-between md:h-[76px]">
        {/* Logo — far left */}
        <a
          href="#top"
          className="flex items-baseline gap-2"
          aria-label={`${brand.wordmark} ${brand.suffix}`}
        >
          <span
            className={cn(
              "text-[19px] font-extrabold tracking-[-0.01em] md:text-[20px]",
              solid ? "text-ink" : "text-paper",
            )}
          >
            {brand.wordmark}
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold tracking-[0.22em] md:text-[11px]",
              solid ? "text-muted" : "text-paper/75",
            )}
          >
            {brand.suffix}
          </span>
        </a>

        {/* Center links — desktop. lg+ only: RU/UZ labels are wide enough to
            collide with the logo and CTA cluster at md widths. */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster — desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav
            aria-label={nav.langAriaLabel}
            className="flex items-center gap-3"
          >
            {LOCALES.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                aria-current={l === locale ? "page" : undefined}
                className={cn(
                  "text-[13px] font-bold tracking-[0.08em] transition-colors",
                  l === locale
                    ? solid
                      ? "text-accent-deep"
                      : "text-accent"
                    : solid
                      ? "text-muted hover:text-ink"
                      : "text-paper/80 hover:text-paper",
                )}
              >
                {LOCALE_LABELS[l]}
              </a>
            ))}
          </nav>
          <Button
            href={BOOKING_URL}
            variant={solid ? "primary" : "ghost-dark"}
            className="px-5 py-2.5 text-sm"
          >
            {nav.cta}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? nav.menuClose : nav.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 transition-transform duration-300",
                solid ? "bg-ink" : "bg-paper",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-5 transition-opacity duration-200",
                solid ? "bg-ink" : "bg-paper",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 transition-transform duration-300",
                solid ? "bg-ink" : "bg-paper",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile menu. `inert` keeps the collapsed panel out of the tab order
          and accessibility tree — max-height clipping alone does not. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "overflow-hidden bg-paper transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96 border-t border-hairline" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[17px] font-medium text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <nav
            aria-label={nav.langAriaLabel}
            className="flex items-center gap-6 py-3"
          >
            {LOCALES.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                aria-current={l === locale ? "page" : undefined}
                className={cn(
                  "text-[15px] font-bold tracking-[0.08em]",
                  l === locale ? "text-accent-deep" : "text-muted",
                )}
              >
                {LOCALE_LABELS[l]}
              </a>
            ))}
          </nav>
          <Button
            href={BOOKING_URL}
            variant="primary"
            arrow
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            {nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  );
}
