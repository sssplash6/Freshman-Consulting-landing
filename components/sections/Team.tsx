import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** The people. Initial-avatars until photos land. */
export function Team({ content }: { content: SiteContent }) {
  const { team } = content;

  return (
    <Section id={SECTION_IDS.team} tone="paper">
      <Container>
        <Reveal className="max-w-[56ch]">
          <Eyebrow as="h2">{team.label}</Eyebrow>
          <p className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] font-extrabold leading-[1.06] tracking-display text-ink">
            {team.title}
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            {team.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {team.members.map((m, i) => (
            <Reveal key={`${m.name}-${m.role}`} delay={i * 80}>
              <div
                aria-hidden
                className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-[20px] font-extrabold tracking-display text-ink"
              >
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="mt-5 text-[19px] font-bold tracking-display text-ink md:text-[20px]">
                {m.name}
              </h3>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-deep">
                {m.role}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {m.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
