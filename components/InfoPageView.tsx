import type { ReactNode } from "react";
import type { InfoPage } from "@/content/pages";
import { siteConfig } from "@/config/site";
import { buildInfoPageStructuredData } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";

const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });

export function InfoPageView({ page, children }: { page: InfoPage; children?: ReactNode }) {
  const updated = siteConfig.updatedDate || siteConfig.publishedDate;

  return (
    <>
      <JsonLd data={buildInfoPageStructuredData(page)} />
      <Header />
      <main id="main-content">
        <Breadcrumb current={page.title} />
        <article className="container info-page">
          <header className="info-header">
            <h1>{page.title}</h1>
            {updated && (
              <p className="info-updated">
                Last updated: <time dateTime={updated}>{dateFormat.format(new Date(updated))}</time>
              </p>
            )}
          </header>

          {page.intro.map((p) => (
            <p key={p} className="info-intro">
              <RichText text={p} />
            </p>
          ))}

          {children}

          {page.sections.map((section) => (
            <section key={section.heading} className="info-section">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
