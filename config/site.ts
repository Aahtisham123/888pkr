/**
 * Site-wide configuration. Everything that identifies the publisher, the author
 * or the publication dates lives here so the site owner can supply real values.
 * Empty strings / empty arrays are never rendered and never emitted in JSON-LD.
 */

export type Source = {
  title: string;
  url: string;
  /** e.g. "nofollow sponsored" for compensated links. Leave empty for editorial citations. */
  rel?: string;
};

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type SiteConfig = {
  url: string;
  name: string;
  independenceNotice: string;
  locale: string;
  language: string;
  publisher: { type: "Organization" | "Person"; name: string; url: string; logo: string };
  author: { name: string; profileUrl: string };
  publishedDate: string;
  updatedDate: string;
  editorialDisclosure: string;
  sources: Source[];
  googleSiteVerification: string;
  twitterHandle: string;
  contactEmail: string;
};

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig: SiteConfig = {
  /** Final EMD homepage URL, no trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
  url: rawSiteUrl.replace(/\/+$/, ""),

  name: "888PKR",
  /** Short notice shown in the footer. */
  independenceNotice:
    "For players aged 18 and over only. Real-money games carry financial risk and can be addictive, so play responsibly, set a budget, and never bet money you can't afford to lose. This is an independent information site.",
  locale: "en_PK",
  language: "en",

  /** Publisher of this website. Use "Organization" or "Person" depending on real ownership. */
  publisher: {
    type: "Organization",
    name: "888PKR",
    url: "",
    logo: "/images/888pkr-logo.webp",
  },

  /** Leave empty until a real, named author is supplied. */
  author: {
    name: "",
    profileUrl: "",
  },

  /** ISO 8601 dates, e.g. "2026-09-30". Leave empty until real values exist. */
  publishedDate: "2026-09-30",
  updatedDate: "2026-09-30",

  /** Optional editorial / affiliate disclosure shown under the article metadata. */
  editorialDisclosure: "",

  /** Optional references. Rendered after the FAQs only when at least one exists. */
  sources: [],

  /** Google Search Console HTML-tag verification token. */
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",

  twitterHandle: "",

  /** Shown on the Contact Us page when set. */
  contactEmail: "",
};

/**
 * App facts shown in the info table and used for MobileApplication JSON-LD.
 * Keep these accurate: Google requires rating data to be genuine and visible on the page.
 */
export const appInfo = {
  name: "888PKR",
  version: "1.0",
  versionLabel: "v1.0 (latest)",
  size: "33 MB",
  developer: "888pkrr.net.pk",
  category: "Slots",
  price: "Free",
  priceValue: "0",
  currency: "PKR",
  region: "Pakistan",
  regionCode: "PK",
  operatingSystem: "Android",
  downloads: 234234,
  ratingValue: 4.5,
  bestRating: 5,
  ratingCount: 52342,
};

export type CtaLink = {
  label: string;
  /** External destination. When empty, the button falls back to the matching guide step. */
  href: string;
  fallbackId: string;
};

/**
 * Hero buttons. External URLs open in a new tab with rel="nofollow sponsored noopener";
 * change `rel` in ArticleHero if a link is purely editorial.
 */
export const ctaLinks: { register: CtaLink; login: CtaLink; download: CtaLink } = {
  register: { label: "Register Now", href: "https://www.888pkr6.com/?dl=4gzj2g", fallbackId: "setup-account" },
  login: { label: "Login Now", href: "https://www.888pkr6.com/?dl=4gzj2g", fallbackId: "login-account" },
  download: { label: "Download App", href: "https://www.888pkr6.com/?dl=4gzj2g", fallbackId: "download-app" },
};

export const media: { logo: SiteImage; hero: SiteImage; gallery: SiteImage[] } = {
  logo: {
    src: "/images/888pkr-logo.webp",
    width: 449,
    height: 100,
    alt: "888PKR Logo",
  },
  hero: {
    src: "/images/888pkr.webp",
    width: 512,
    height: 512,
    alt: "888PKR",
  },
  gallery: [
    ["888pkr-home-interface", "888PKR Home Interface"],
    ["888pkr-games", "888PKR Games"],
    ["888pkr-promotions", "888PKR Promotions"],
    ["888pkr-daily-missions", "888PKR Daily Missions"],
    ["888pkr-vip-member-privileges", "888PKR VIP Member Privileges"],
    ["888pkr-profile-interface", "888PKR Profile Interface"],
    ["888pkr-login-page", "888PKR Login Page"],
    ["888pkr-register-page", "888PKR Register Page"],
    ["888pkr-earning-app", "888PKR Earning App"],
  ].map(([file, alt]) => ({
    src: `/images/gallery/${file}.webp`,
    width: 472,
    height: 1024,
    alt,
  })),
};

/** Header / footer anchor navigation. Every id must exist in the article content. */
export const sectionNav = [
  { label: "Overview", id: "overview" },
  { label: "Features", id: "features-of-888pkr-game-earning-app" },
  { label: "Games", id: "game-categories-to-explore" },
  { label: "Safety", id: "is-888pkr-safe-and-legal" },
  { label: "Getting Started", id: "how-to-get-started" },
  { label: "Agent", id: "how-to-become-888pkr-agent" },
  { label: "Pros & Cons", id: "pros-and-cons" },
  { label: "Reviews", id: "personal-experience-and-user-testimonials" },
  { label: "FAQ", id: "faqs" },
] as const;

/** Footer links to the site's information pages. Paths must match routes in `app/`. */
export const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}
