import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** Free finance guides — lead magnets. Dark band; cards flip to real links later. */
export function Guides({ content }: { content: SiteContent }) {
  const { guides } = content;

  return (
    <Section id={SECTION_IDS.guides} tone="ink">
      <Container>
        <Reveal className="max-w-[52ch]">
          <Eyebrow as="h2" tone="dark">
            {guides.label}
          </Eyebrow>
          <p className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold leading-[1.06] tracking-display text-paper">
            {guides.title}
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-fog-soft md:text-[17px]">
            {guides.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2">
          {guides.items.map((g, i) => (
            <Reveal
              key={g.title}
              as="article"
              delay={i * 60}
              className="flex flex-col border border-hairline-dark p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[19px] font-bold leading-snug tracking-display text-paper md:text-[21px]">
                  {g.title}
                </h3>
                <span className="shrink-0 border border-accent/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                  {guides.comingSoon}
                </span>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-fog-soft">
                {g.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
