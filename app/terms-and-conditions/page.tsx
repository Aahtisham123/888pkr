import type { Metadata } from "next";
import { termsPage } from "@/content/pages";
import { infoPageMetadata } from "@/lib/seo";
import { InfoPageView } from "@/components/InfoPageView";

export const metadata: Metadata = infoPageMetadata(termsPage);

export default function Page() {
  return <InfoPageView page={termsPage} />;
}
