import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import type { SiteContent } from "@/lib/content";
import { SECTION_IDS } from "@/lib/config";

/** Authority beat: problem → solution → result cards. Nav's "Latest updates" lands here. */
export function CaseStudies({ content }: { content: SiteContent }) {
  const { caseStudies } = content;
  const rows = caseStudies.rowLabels;

  return (
    <Section id={SECTION_IDS.caseStudies} tone="ivory">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
          <Eyebrow as="h2">{caseStudies.label}</Eyebrow>
          <p className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-display text-ink">
            {caseStudies.title}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.items.map((cs) => (
            <article
              key={cs.sector}
              className="flex flex-col border border-hairline bg-paper p-7"
            >
              <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-ink">
                {cs.sector}
              </h3>

              <dl className="mt-6 flex flex-1 flex-col gap-5">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                    {rows.problem}
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                    {cs.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                    {rows.built}
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                    {cs.built}
                  </dd>
                </div>
                <div className="mt-auto border-t border-hairline pt-5">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-deep">
                    {rows.result}
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] font-semibold leading-relaxed text-ink">
                    {cs.result}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
