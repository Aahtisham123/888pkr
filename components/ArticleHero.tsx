import Image from "next/image";
import { article } from "@/content/article";
import { ctaLinks, media } from "@/config/site";
import { CtaButton } from "@/components/CtaButton";
import { RichText } from "@/components/RichText";

export function ArticleHero() {
  const { overview } = article;
  const hero = media.hero;

  return (
    <header className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">{article.title}</h1>

          <div id={overview.id} className="hero-overview">
            {overview.paragraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
            <div className="hero-actions">
              <CtaButton link={ctaLinks.register} icon="userPlus" />
              <CtaButton link={ctaLinks.login} variant="secondary" icon="user" />
            </div>
          </div>
        </div>

        <div className="hero-media">
          <figure className="hero-figure">
            <div className="hero-glass hero-glass-a" aria-hidden="true" />
            <div className="hero-glass hero-glass-b" aria-hidden="true" />
            <div className="hero-glass hero-glass-c" aria-hidden="true" />
            <Image
              src={hero.src}
              width={hero.width}
              height={hero.height}
              alt={hero.alt}
              sizes="(min-width: 960px) 340px, (min-width: 640px) 320px, 72vw"
              preload
              className="hero-image"
            />
          </figure>
          <CtaButton link={ctaLinks.download} icon="download" className="hero-download" />
        </div>
      </div>
    </header>
  );
}
