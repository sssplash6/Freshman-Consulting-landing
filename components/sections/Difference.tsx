import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** Differentiation beat: why us and not Big4 / local consultants / freelancers. */
export function Difference({ content }: { content: SiteContent }) {
  const { difference } = content;

  return (
    <Section id={SECTION_IDS.whyUs} tone="paper">
      <Container>
        <Reveal className="max-w-[58ch]">
          <Eyebrow as="h2">{difference.label}</Eyebrow>
          <p className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold leading-[1.06] tracking-display text-ink">
            {difference.title}
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            {difference.positioning}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {difference.items.map((item, i) => (
            <Reveal
              key={item.versus}
              delay={i * 80}
              className="border border-hairline p-7"
            >
              <p
                aria-hidden
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-deep"
              >
                vs
              </p>
              <h3 className="mt-1.5 text-[20px] font-bold tracking-display text-ink md:text-[22px]">
                {item.versus}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
