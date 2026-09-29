import type { Metadata } from "next";
import { article, plainText } from "@/content/article";
import type { InfoPage } from "@/content/pages";
import { absoluteUrl, appInfo, media, siteConfig } from "@/config/site";
import { getWordCount } from "@/lib/article-outline";

/** Editable homepage SEO fields. Keep the description under 144 characters. */
export const homeSeo = {
  title: article.title,
  description:
    "888PKR game download guide for Pakistan: features, login, bonuses, withdrawals, safety and the real risks of this earning app in 2026.",
  keywords: [
    "888PKR",
    "888PKR game download",
    "888PKR login",
    "888PKR app",
    "real earning app Pakistan",
    "earning app in Pakistan",
    "online earning game",
  ],
  path: "/",
};

/** Featured image used for social previews and structured data. */
export const featuredImage = {
  url: media.hero.src,
  width: media.hero.width,
  height: media.hero.height,
  alt: media.hero.alt,
  type: "image/webp",
};

type JsonLdNode = Record<string, unknown>;

function publisherNode(home: string): JsonLdNode {
  const p = siteConfig.publisher;
  const node: JsonLdNode = {
    "@type": p.type,
    "@id": `${home}#publisher`,
    name: p.name,
    url: p.url || home,
  };
  if (p.logo && p.type === "Organization") {
    node.logo = {
      "@type": "ImageObject",
      url: absoluteUrl(p.logo),
      width: media.logo.width,
      height: media.logo.height,
    };
  }
  return node;
}

function authorNode(home: string): JsonLdNode {
  const { name, profileUrl } = siteConfig.author;
  if (!name) return { "@id": `${home}#publisher` };
  const node: JsonLdNode = { "@type": "Person", name };
  if (profileUrl) node.url = profileUrl;
  return node;
}

export function buildStructuredData(): JsonLdNode {
  const home = absoluteUrl("/");
  const primaryImage = { "@id": `${home}#primaryimage` };

  const articleNode: JsonLdNode = {
    "@type": "Article",
    "@id": `${home}#article`,
    headline: article.title,
    description: homeSeo.description,
    image: primaryImage,
    thumbnailUrl: absoluteUrl(featuredImage.url),
    author: authorNode(home),
    publisher: { "@id": `${home}#publisher` },
    mainEntityOfPage: { "@id": `${home}#webpage` },
    about: { "@id": `${home}#app` },
    inLanguage: siteConfig.language,
    wordCount: getWordCount(),
  };
  if (siteConfig.publishedDate) articleNode.datePublished = siteConfig.publishedDate;
  if (siteConfig.updatedDate || siteConfig.publishedDate) {
    articleNode.dateModified = siteConfig.updatedDate || siteConfig.publishedDate;
  }

  const appNode: JsonLdNode = {
    "@type": "MobileApplication",
    "@id": `${home}#app`,
    name: appInfo.name,
    url: home,
    image: primaryImage,
    screenshot: media.gallery.map((g) => absoluteUrl(g.src)),
    description: plainText(article.overview.paragraphs[0]),
    operatingSystem: appInfo.operatingSystem,
    applicationCategory: "GameApplication",
    applicationSubCategory: appInfo.category,
    softwareVersion: appInfo.version,
    fileSize: appInfo.size,
    countriesSupported: appInfo.regionCode,
    inLanguage: ["en", "ur"],
    author: { "@type": "Organization", name: appInfo.developer },
    offers: {
      "@type": "Offer",
      price: appInfo.priceValue,
      priceCurrency: appInfo.currency,
      availability: "https://schema.org/InStock",
      eligibleRegion: { "@type": "Country", name: appInfo.region },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: appInfo.ratingValue,
      bestRating: appInfo.bestRating,
      worstRating: 1,
      ratingCount: appInfo.ratingCount,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${home}#publisher` },
      },
      publisherNode(home),
      {
        "@type": "WebPage",
        "@id": `${home}#webpage`,
        url: home,
        name: article.title,
        description: homeSeo.description,
        isPartOf: { "@id": `${home}#website` },
        primaryImageOfPage: primaryImage,
        image: primaryImage,
        thumbnailUrl: absoluteUrl(featuredImage.url),
        breadcrumb: { "@id": `${home}#breadcrumb` },
        mainEntity: { "@id": `${home}#app` },
        inLanguage: siteConfig.language,
        ...(siteConfig.publishedDate && { datePublished: siteConfig.publishedDate }),
        ...((siteConfig.updatedDate || siteConfig.publishedDate) && {
          dateModified: siteConfig.updatedDate || siteConfig.publishedDate,
        }),
      },
      {
        "@type": "ImageObject",
        "@id": `${home}#primaryimage`,
        url: absoluteUrl(featuredImage.url),
        contentUrl: absoluteUrl(featuredImage.url),
        width: featuredImage.width,
        height: featuredImage.height,
        caption: featuredImage.alt,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${home}#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: home }],
      },
      articleNode,
      appNode,
      {
        "@type": "FAQPage",
        "@id": `${home}#faq`,
        mainEntity: article.faqs.items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export function infoPageMetadata(page: InfoPage): Metadata {
  return {
    title: `${page.metaTitle} | ${siteConfig.name}`,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: siteConfig.name,
      title: `${page.metaTitle} | ${siteConfig.name}`,
      description: page.description,
      locale: siteConfig.locale,
      images: [featuredImage],
    },
    twitter: {
      card: "summary",
      title: `${page.metaTitle} | ${siteConfig.name}`,
      description: page.description,
      images: [{ url: featuredImage.url, alt: featuredImage.alt }],
    },
  };
}

export function buildInfoPageStructuredData(page: InfoPage): JsonLdNode {
  const home = absoluteUrl("/");
  const url = absoluteUrl(page.path);
  const updated = siteConfig.updatedDate || siteConfig.publishedDate;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.schemaType,
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        isPartOf: { "@type": "WebSite", "@id": `${home}#website`, name: siteConfig.name, url: home },
        publisher: publisherNode(home),
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: siteConfig.language,
        ...(updated && { dateModified: updated }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: home },
          { "@type": "ListItem", position: 2, name: page.title, item: url },
        ],
      },
    ],
  };
}
