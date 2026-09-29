import type { Metadata } from "next";
import { article } from "@/content/article";
import { siteConfig } from "@/config/site";
import { getToc } from "@/lib/article-outline";
import { buildStructuredData, featuredImage, homeSeo } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleMeta } from "@/components/ArticleMeta";
import { TableOfContents } from "@/components/TableOfContents";
import { ArticleSection } from "@/components/ArticleSection";
import { RichText } from "@/components/RichText";
import { FeatureSection } from "@/components/FeatureSection";
import { GameCategorySection } from "@/components/GameCategorySection";
import { SafetySection } from "@/components/SafetySection";
import { StepGuide } from "@/components/StepGuide";
import { ProsCons } from "@/components/ProsCons";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  keywords: homeSeo.keywords,
  authors: [
    siteConfig.author.name
      ? { name: siteConfig.author.name, url: siteConfig.author.profileUrl || undefined }
      : { name: siteConfig.publisher.name, url: siteConfig.url },
  ],
  creator: siteConfig.publisher.name,
  publisher: siteConfig.publisher.name,
  category: "Games",
  alternates: { canonical: homeSeo.path },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    url: homeSeo.path,
    siteName: siteConfig.name,
    title: homeSeo.title,
    description: homeSeo.description,
    locale: siteConfig.locale,
    ...(siteConfig.publishedDate && { publishedTime: siteConfig.publishedDate }),
    ...(siteConfig.updatedDate && { modifiedTime: siteConfig.updatedDate }),
    ...(siteConfig.author.name && { authors: [siteConfig.author.name] }),
    images: [featuredImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [{ url: featuredImage.url, alt: featuredImage.alt }],
    ...(siteConfig.twitterHandle && { site: siteConfig.twitterHandle }),
  },
};

export default function HomePage() {
  const toc = getToc();
  const { introduction, whatIs, choose, agent, conclusion } = article;

  return (
    <>
      <JsonLd data={buildStructuredData()} />
      <Header />

      <main id="main-content">
        <Breadcrumb />

        <article className="article">
          <ArticleHero />
          <ArticleMeta />

          <div className="container article-layout">
            <TableOfContents items={toc} />

            <div className="article-body">
              <section id={introduction.id} className="article-section intro">
                {introduction.paragraphs.map((p, i) => (
                  <p key={p} className={i === 0 ? "lead" : undefined}>
                    {p}
                  </p>
                ))}
              </section>

              <ArticleSection id={whatIs.id} heading={whatIs.heading}>
                {whatIs.paragraphs.map((p) => (
                  <p key={p}>
                    <RichText text={p} />
                  </p>
                ))}
              </ArticleSection>

              <FeatureSection />
              <GameCategorySection />
              <SafetySection />

              <ArticleSection id={choose.id} heading={choose.heading} className="choose">
                <div className="contrast-grid">
                  <p className="contrast-card contrast-yes">{choose.paragraphs[0]}</p>
                  <p className="contrast-card contrast-no">{choose.paragraphs[1]}</p>
                </div>
              </ArticleSection>

              <StepGuide />

              <ArticleSection id={agent.id} heading={agent.heading} className="agent">
                <p>{agent.paragraph}</p>
                <ul className="process-list">
                  {agent.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </ArticleSection>

              <ProsCons />
              <Testimonials />
              <Gallery />

              <ArticleSection id={conclusion.id} heading={conclusion.heading} className="conclusion">
                <p>{conclusion.paragraph}</p>
              </ArticleSection>

              <FAQ />

              {siteConfig.sources.length > 0 && (
                <aside className="sources" aria-labelledby="sources-heading">
                  <h2 id="sources-heading" className="sources-heading">
                    Sources
                  </h2>
                  <ol>
                    {siteConfig.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} rel={s.rel || undefined}>
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </aside>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
