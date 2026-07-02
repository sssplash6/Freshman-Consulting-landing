import { Container } from "@/components/primitives/Container";
import type { SiteContent } from "@/lib/content";

export function Footer({ content }: { content: SiteContent }) {
  const { footer, brand } = content;

  return (
    <footer className="border-t border-hairline-dark bg-ink py-10 text-fog">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-[14px] text-fog">{footer.left}</p>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <span
            aria-hidden
            className="text-[12px] font-extrabold tracking-display text-paper"
          >
            {brand.wordmark}{" "}
            <span className="font-semibold tracking-[0.18em] text-fog-soft">
              {brand.suffix}
            </span>
          </span>
          <p className="text-[13px] text-fog-soft">{footer.right}</p>
        </div>
      </Container>
    </footer>
  );
}
