"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";

type NavItem = { label: string; id: string };

export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;

    const close = () => {
      details.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && details.open) {
        close();
        details.querySelector("summary")?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (details.open && !details.contains(e.target as Node)) close();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <details ref={ref} className="mobile-menu">
      <summary className="icon-button" aria-label="Menu">
        <Icon name="menu" size={22} className="mobile-menu-open" />
        <Icon name="close" size={22} className="mobile-menu-close" />
      </summary>
      <nav className="mobile-menu-panel" aria-label="Mobile">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                onClick={() => {
                  if (ref.current) ref.current.open = false;
                }}
              >
                {item.label}
                <Icon name="chevronRight" size={16} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
