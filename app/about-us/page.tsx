import type { Metadata } from "next";
import { aboutPage } from "@/content/pages";
import { infoPageMetadata } from "@/lib/seo";
import { InfoPageView } from "@/components/InfoPageView";

export const metadata: Metadata = infoPageMetadata(aboutPage);

export default function Page() {
  return <InfoPageView page={aboutPage} />;
}
