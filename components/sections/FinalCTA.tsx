import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import type { SiteContent } from "@/lib/content";
import { BOOKING_URL } from "@/lib/config";

export function FinalCTA({ content }: { content: SiteContent }) {
  const { finalCta } = content;

  return (
    <Section tone="ink" className="py-24 md:py-32">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-[18ch] text-[34px] font-extrabold leading-[1.02] tracking-display text-paper md:text-[clamp(2.5rem,5vw,3.5rem)]">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-[16px] text-fog-soft md:text-[17px]">
            {finalCta.sub}
          </p>
        </div>

        <Button
          href={BOOKING_URL}
          variant="ghost-dark"
          arrow
          className="self-start md:self-auto"
        >
          {finalCta.cta}
        </Button>
      </Container>
    </Section>
  );
}
