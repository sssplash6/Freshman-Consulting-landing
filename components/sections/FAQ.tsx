import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** Native <details> accordion — accessible with zero client JS. */
export function FAQ({ content }: { content: SiteContent }) {
  const { faq } = content;

  return (
    <Section id={SECTION_IDS.faq} tone="ivory">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
          <Eyebrow as="h2">{faq.label}</Eyebrow>
          <p className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-display text-ink">
            {faq.title}
          </p>
        </Reveal>

        <Reveal className="mt-4">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-hairline">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-bold tracking-[-0.01em] text-ink md:text-[19px]">
                  {item.q}
                </h3>
                <span
                  aria-hidden
                  className="shrink-0 text-[22px] font-medium leading-none text-accent-deep transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[70ch] pb-6 text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
