import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** The relief beat: after the stakes, the calm "it's fixable — that's us". */
export function About({ content }: { content: SiteContent }) {
  const { about } = content;

  return (
    <Section id={SECTION_IDS.about} tone="paper">
      <Container>
        <div className="max-w-[56ch]">
          <Eyebrow as="h2">{about.label}</Eyebrow>
          <p className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold leading-[1.06] tracking-display text-ink">
            {about.title}
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            {about.body}
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-hairline pt-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {about.points.map((point) => (
            <div key={point.title}>
              <h3 className="text-[20px] font-bold tracking-display text-ink md:text-[22px]">
                <span aria-hidden className="mr-2 text-clay">
                  —
                </span>
                {point.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
