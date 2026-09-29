import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";
import { Icon } from "@/components/Icon";

export function GameCategorySection() {
  const { categories } = article;

  return (
    <ArticleSection id={categories.id} heading={categories.heading} className="categories">
      <div className="category-list">
        {categories.items.map((item) => (
          <div key={item.id} className={`category-block tone-${item.tone}`}>
            <div className="category-art" aria-hidden="true">
              <span className="category-ring" />
              <Icon name={item.icon} size={34} strokeWidth={1.6} />
            </div>
            <div className="category-body">
              <h3 id={item.id}>{item.heading}</h3>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </ArticleSection>
  );
}
