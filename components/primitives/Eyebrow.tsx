import { cn } from "@/lib/utils/cn";

/**
 * The small uppercase section label used throughout Monolith.
 * Manrope 700, wide tracking. `tone="dark"` for use on the ink sections.
 * Pass `as="h2"` when the eyebrow is a section's primary heading, so the
 * document outline stays well-formed even though it looks like a label.
 */
export function Eyebrow({
  children,
  tone = "light",
  as: Tag = "span",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  as?: "span" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "block text-[11px] font-bold uppercase leading-none tracking-[0.18em] md:text-[13px]",
        tone === "dark" ? "text-fog" : "text-muted",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
