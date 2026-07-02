/**
 * Tiny classname joiner — concatenates truthy class strings.
 * (No clsx/tailwind-merge dependency; we don't need conflict resolution here.)
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
