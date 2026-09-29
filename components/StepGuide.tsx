import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";

export function StepGuide() {
  const { gettingStarted } = article;

  return (
    <ArticleSection id={gettingStarted.id} heading={gettingStarted.heading} className="steps">
      <p>{gettingStarted.paragraph}</p>
      <ol className="step-timeline">
        {gettingStarted.steps.map((step) => (
          <li key={step.id} className="step">
            <span className="step-marker" aria-hidden="true" />
            <div className="step-card">
              <h3 id={step.id}>{step.heading}</h3>
              <ul className="check-list">
                {step.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </ArticleSection>
  );
}
