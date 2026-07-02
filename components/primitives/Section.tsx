import { cn } from "@/lib/utils/cn";

type Tone = "paper" | "ivory" | "ink";

/**
 * Section shell: background tone + consistent vertical rhythm + anchor id.
 * Sections compose their inner layout with <Container>.
 */
export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const tones: Record<Tone, string> = {
    paper: "bg-paper text-ink",
    ivory: "bg-ivory text-ink",
    ink: "bg-ink text-paper",
  };
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}
