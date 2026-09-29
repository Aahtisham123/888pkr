import type { Metadata } from "next";
import { privacyPage } from "@/content/pages";
import { infoPageMetadata } from "@/lib/seo";
import { InfoPageView } from "@/components/InfoPageView";

export const metadata: Metadata = infoPageMetadata(privacyPage);

export default function Page() {
  return <InfoPageView page={privacyPage} />;
}
