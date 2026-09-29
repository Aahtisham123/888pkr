"use client";

import { useEffect } from "react";

type Section = { id: string; children: string[] };

/** Marks the table-of-contents entry for the heading currently being read. Renders nothing. */
export function TocHighlighter({ sections }: { sections: Section[] }) {
  useEffect(() => {
    const parentOf = new Map<string, string>();
    const ids: string[] = [];
    for (const s of sections) {
      ids.push(s.id);
      parentOf.set(s.id, s.id);
      for (const c of s.children) {
        ids.push(c);
        parentOf.set(c, s.id);
      }
    }

    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-toc-link]"));
    const sectionItems = Array.from(document.querySelectorAll<HTMLElement>("[data-toc-section]"));
    let current = "";

    const offset = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      return (header?.offsetHeight ?? 64) + 24;
    };

    const update = () => {
      const limit = offset();
      let active = headings[0].id;
      for (const el of headings) {
        if (el.getBoundingClientRect().top - limit <= 1) active = el.id;
        else break;
      }
      if (active === current) return;
      current = active;
      const section = parentOf.get(active);

      for (const link of links) {
        const id = link.dataset.tocLink;
        if (id === active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.toggleAttribute("data-in-section", id === section);
      }
      for (const item of sectionItems) {
        item.toggleAttribute("data-open", item.dataset.tocSection === section);
      }
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: `-${offset()}px 0px -55% 0px`,
      threshold: [0, 1],
    });
    headings.forEach((el) => observer.observe(el));
    update();

    const mobile = document.querySelector<HTMLDetailsElement>(".toc-mobile");
    const onMobileClick = (e: Event) => {
      if (mobile && (e.target as HTMLElement).closest("a")) mobile.open = false;
    };
    mobile?.addEventListener("click", onMobileClick);

    return () => {
      observer.disconnect();
      mobile?.removeEventListener("click", onMobileClick);
    };
  }, [sections]);

  return null;
}
