import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";
import { Icon } from "@/components/Icon";

export function FeatureSection() {
  const { features } = article;

  return (
    <ArticleSection id={features.id} heading={features.heading} className="features">
      <div className="feature-grid">
        {features.items.map((item) => (
          <div key={item.id} className="feature-card">
            <span className="feature-icon">
              <Icon name={item.icon} size={20} />
            </span>
            <h3 id={item.id}>{item.heading}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </ArticleSection>
  );
}
