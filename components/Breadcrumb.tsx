import Link from "next/link";
import { Icon } from "@/components/Icon";

/** Pass `current` on inner pages; the homepage renders "Home" as the current item. */
export function Breadcrumb({ current }: { current?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb container">
      <ol>
        <li>
          <Link href="/" {...(!current && { "aria-current": "page" as const })}>
            <Icon name="home" size={16} strokeWidth={2} />
            Home
          </Link>
        </li>
        {current && (
          <li>
            <Icon name="chevronRight" size={14} className="breadcrumb-sep" />
            <span aria-current="page">{current}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
