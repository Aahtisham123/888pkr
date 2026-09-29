import type { TocItem } from "@/lib/article-outline";
import { AppInfo } from "@/components/AppInfo";
import { Icon } from "@/components/Icon";
import { TocHighlighter } from "@/components/TocHighlighter";

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <aside className="toc">
      <AppInfo />
      <details className="toc-mobile">
        <summary>
          <Icon name="list" size={18} />
          <span>Table of Contents</span>
          <Icon name="chevronDown" size={18} className="toc-chevron" />
        </summary>
        <nav aria-label="Table of Contents">
          <ol className="toc-list">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} data-toc-link={item.id}>
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      <nav className="toc-desktop" aria-labelledby="toc-desktop-title">
        <p id="toc-desktop-title" className="toc-title">
          <Icon name="list" size={16} />
          Table of Contents
        </p>
        <ol className="toc-list">
          {items.map((item) => (
            <li key={item.id} data-toc-section={item.id}>
              <a href={`#${item.id}`} data-toc-link={item.id}>
                {item.text}
              </a>
              {item.children.length > 0 && (
                <ol className="toc-sub">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a href={`#${child.id}`} data-toc-link={child.id}>
                        {child.text}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <TocHighlighter
        sections={items.map((i) => ({ id: i.id, children: i.children.map((c) => c.id) }))}
      />
    </aside>
  );
}
