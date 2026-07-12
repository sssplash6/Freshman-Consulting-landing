import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";
import { cn } from "@/lib/utils/cn";

/** Consulting-style proof numbers: $10M+ advised, 20+ mandates, … */
export function Credentials({ content }: { content: SiteContent }) {
  const { credentials } = content;

  return (
    <Section id={SECTION_IDS.credentials} tone="ivory">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
          <Eyebrow as="h2">{credentials.label}</Eyebrow>
          <p className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-display text-ink">
            {credentials.title}
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
          {credentials.items.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={cn(
                "flex flex-col",
                i > 0 && "lg:border-l lg:border-hairline lg:pl-10",
                i % 2 === 1 && "border-l border-hairline pl-6 lg:pl-10",
              )}
            >
              {/* dt must precede dd in the DOM; order-* keeps value-first visually. */}
              <dt className="order-2 mt-3 max-w-[24ch] text-[14px] leading-snug text-muted md:text-[15px]">
                {stat.label}
              </dt>
              <dd className="order-1 text-[clamp(2.4rem,4.6vw,3.5rem)] font-extrabold leading-none tracking-display text-ink">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
