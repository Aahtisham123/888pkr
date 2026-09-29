import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";
import { Icon } from "@/components/Icon";

export function FAQ() {
  const { faqs } = article;

  return (
    <ArticleSection id={faqs.id} heading={faqs.heading} className="faq">
      <div className="faq-list">
        {faqs.items.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>
              <h3 id={item.id}>{item.question}</h3>
              <Icon name="chevronDown" size={20} className="faq-chevron" />
            </summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </ArticleSection>
  );
}
