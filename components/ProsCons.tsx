import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";
import { Icon } from "@/components/Icon";

export function ProsCons() {
  const { prosCons } = article;

  return (
    <ArticleSection id={prosCons.id} heading={prosCons.heading} className="pros-cons">
      <div className="pc-grid">
        <div className="pc-card pc-pros">
          <p className="pc-title">
            <span className="pc-badge" aria-hidden="true">
              <Icon name="check" size={16} strokeWidth={2.4} />
            </span>
            <strong>{prosCons.prosLabel}</strong>
          </p>
          <ul>
            {prosCons.pros.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} strokeWidth={2.2} className="pc-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pc-card pc-cons">
          <p className="pc-title">
            <span className="pc-badge" aria-hidden="true">
              <Icon name="minus" size={16} strokeWidth={2.4} />
            </span>
            <strong>{prosCons.consLabel}</strong>
          </p>
          <ul>
            {prosCons.cons.map((item) => (
              <li key={item}>
                <Icon name="minus" size={16} strokeWidth={2.2} className="pc-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ArticleSection>
  );
}
