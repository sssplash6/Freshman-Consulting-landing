import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";
import { cn } from "@/lib/utils/cn";

/** "What's at stake" — the urgency beat. Dark section, big numbers. */
export function Stakes({ content }: { content: SiteContent }) {
  const { stakes } = content;

  return (
    <Section id={SECTION_IDS.stakes} tone="ink">
      <Container>
        <Reveal className="max-w-[52ch]">
          <Eyebrow as="h2" tone="dark">
            {stakes.label}
          </Eyebrow>
          <p className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold leading-[1.06] tracking-display text-paper">
            {stakes.title}
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-fog-soft md:text-[17px]">
            {stakes.intro}
          </p>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-y-12 md:mt-16 lg:grid-cols-4 lg:gap-y-0">
          {stakes.items.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={cn(
                "flex flex-col",
                i > 0 && "lg:border-l lg:border-hairline-dark lg:pl-10",
                i % 2 === 1 && "border-l border-hairline-dark pl-6 lg:pl-10",
              )}
            >
              <dt className="order-2 mt-3 max-w-[24ch] text-[14px] leading-snug text-fog-soft md:text-[15px]">
                {stat.label}
              </dt>
              <dd className="order-1 text-[clamp(2.4rem,4.6vw,3.5rem)] font-extrabold leading-none tracking-display text-paper">
                {stat.value}
              </dd>
              {stat.source && (
                <dd className="order-3 mt-3 text-[12px] text-fog">
                  {stat.source}
                </dd>
              )}
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
