import { article } from "@/content/article";
import { ArticleSection } from "@/components/ArticleSection";
import { Carousel } from "@/components/Carousel";
import { Icon } from "@/components/Icon";
import { RichText } from "@/components/RichText";

export function Testimonials() {
  const { experience } = article;
  const { personal, testimonials } = experience;

  return (
    <ArticleSection id={experience.id} heading={experience.heading} className="experience">
      <div className="experience-personal">
        <h3 id={personal.id}>{personal.heading}</h3>
        <p>
          <RichText text={personal.paragraph} />
        </p>
      </div>

      <div className="experience-testimonials">
        <h3 id={testimonials.id}>{testimonials.heading}</h3>
        <Carousel label={testimonials.heading} className="testimonial-carousel">
          <ul className="carousel-list">
            {testimonials.items.map((t, i) => (
              <li
                key={t.name}
                className="carousel-slide"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.items.length}`}
              >
                <figure className="testimonial-card">
                  <figcaption>
                    <span className="testimonial-avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </span>
                    <strong>{t.name}</strong>
                  </figcaption>
                  <blockquote>
                    <Icon name="quote" size={20} className="testimonial-quote-icon" />
                    <p>{t.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </Carousel>
      </div>
    </ArticleSection>
  );
}
