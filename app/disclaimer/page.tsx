import type { Metadata } from "next";
import { disclaimerPage } from "@/content/pages";
import { infoPageMetadata } from "@/lib/seo";
import { InfoPageView } from "@/components/InfoPageView";

export const metadata: Metadata = infoPageMetadata(disclaimerPage);

export default function Page() {
  return <InfoPageView page={disclaimerPage} />;
}
