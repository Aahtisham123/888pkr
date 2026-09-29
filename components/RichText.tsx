import type { ReactNode } from "react";
import Link from "next/link";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders a content string, turning inline `[text](href)` markup into links. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={href} className="inline-link">
        {label}
      </Link>,
    );
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}
