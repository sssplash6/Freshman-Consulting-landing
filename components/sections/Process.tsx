import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** "What we do": the four-step engagement, numbered editorial rows. */
export function Process({ content }: { content: SiteContent }) {
  const { process } = content;

  return (
    <Section id={SECTION_IDS.process} tone="paper">
      <Container>
        <div className="mb-2 flex items-end justify-between border-b border-hairline pb-6">
          <Eyebrow as="h2">{process.label}</Eyebrow>
          <p className="text-sm text-muted">{process.note}</p>
        </div>

        <ol>
          {process.steps.map((step) => (
            <li
              key={step.num}
              className="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-hairline py-8 md:grid-cols-12 md:items-baseline md:py-10"
            >
              <div className="flex items-baseline gap-4 md:col-span-6 md:contents">
                <span className="text-[15px] font-bold tracking-wide tabular-nums text-accent-deep md:col-span-2">
                  {step.num}
                </span>
                <h3 className="text-[26px] font-bold tracking-display text-ink md:col-span-4 md:text-[30px]">
                  {step.title}
                </h3>
              </div>

              <p className="max-w-prose text-[16px] leading-relaxed text-ink-soft md:col-span-6 md:text-[17px]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
