import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import type { SiteContent } from "@/lib/content";

/**
 * Thin client/project wordmark band. Text wordmarks until real logos land;
 * renders nothing while the list is empty.
 */
export function Clients({ content }: { content: SiteContent }) {
  const { clients } = content;
  if (clients.names.length === 0) return null;

  return (
    <div className="border-b border-t border-hairline bg-paper py-10">
      <Container>
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
          <p className="shrink-0 text-[11px] font-bold uppercase leading-none tracking-[0.18em] text-muted">
            {clients.label}
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {clients.names.map((name) => (
              <li
                key={name}
                className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-muted md:text-[14px]"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}
