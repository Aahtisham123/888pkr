import type { MetadataRoute } from "next";
import { absoluteUrl, footerLinks, media, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = siteConfig.updatedDate || siteConfig.publishedDate;
  return [
    {
      url: absoluteUrl("/"),
      ...(lastModified && { lastModified }),
      images: [media.hero, ...media.gallery].map((img) => absoluteUrl(img.src)),
    },
    ...footerLinks.map((link) => ({
      url: absoluteUrl(link.href),
      ...(lastModified && { lastModified }),
    })),
  ];
}
