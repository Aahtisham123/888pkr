import type { ReactNode } from "react";

type ArticleSectionProps = {
  id: string;
  heading: string;
  className?: string;
  children: ReactNode;
};

export function ArticleSection({ id, heading, className, children }: ArticleSectionProps) {
  return (
    <section aria-labelledby={id} className={`article-section${className ? ` ${className}` : ""}`}>
      <h2 id={id} className="section-heading">
        {heading}
      </h2>
      {children}
    </section>
  );
}
