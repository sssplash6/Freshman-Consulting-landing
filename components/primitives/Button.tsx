import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost-dark";

/**
 * CTA rendered as a link. Variants:
 *  - primary:    solid ink on light (the main "Book a call")
 *  - secondary:  hairline outline on light ("See the work")
 *  - ghost-dark: solid white on the dark sections (final CTA)
 */
export function Button({
  href,
  variant = "primary",
  arrow = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-paper border border-ink hover:bg-accent-deep hover:border-accent-deep",
    secondary:
      "bg-transparent text-ink border border-hairline hover:border-ink",
    "ghost-dark":
      "bg-paper text-ink border border-paper hover:bg-accent-deep hover:text-paper hover:border-accent-deep",
  };

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}
