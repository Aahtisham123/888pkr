import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { contactPage } from "@/content/pages";
import { infoPageMetadata } from "@/lib/seo";
import { InfoPageView } from "@/components/InfoPageView";

export const metadata: Metadata = infoPageMetadata(contactPage);

export default function Page() {
  const email = siteConfig.contactEmail;

  return (
    <InfoPageView page={contactPage}>
      {email && (
        <p className="info-contact">
          Email us at <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </InfoPageView>
  );
}
