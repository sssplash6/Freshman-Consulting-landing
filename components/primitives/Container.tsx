import { cn } from "@/lib/utils/cn";

/** Page gutter + max content width. Every section centers its content here. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
