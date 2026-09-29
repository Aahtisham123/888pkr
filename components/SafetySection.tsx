import { article } from "@/content/article";
import { Icon } from "@/components/Icon";

export function SafetySection() {
  const { safety } = article;

  return (
    <section aria-labelledby={safety.id} className="article-section safety">
      <div className="safety-panel">
        <div className="safety-head">
          <span className="safety-icon" aria-hidden="true">
            <Icon name="shield" size={22} />
          </span>
          <h2 id={safety.id} className="section-heading">
            {safety.heading}
          </h2>
        </div>
        <p>{safety.paragraph}</p>
        <ul className="safety-list">
          {safety.bullets.map((b) => (
            <li key={b.label}>
              <Icon name="info" size={18} className="safety-bullet-icon" />
              <span>
                <strong>{b.label}</strong> {b.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
