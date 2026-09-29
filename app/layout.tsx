import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  ...(siteConfig.googleSiteVerification && {
    verification: { google: siteConfig.googleSiteVerification },
  }),
};

export const viewport: Viewport = {
  themeColor: "#f7fbff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} className={`${inter.variable} ${jakarta.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
