import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <Logo />
      <h1>Page not found</h1>
      <Link href="/" className="not-found-link">
        Go to homepage
      </Link>
    </main>
  );
}
