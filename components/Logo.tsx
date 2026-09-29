import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/site";

export function Logo({ eager = false }: { eager?: boolean }) {
  const { logo } = media;

  return (
    <Link href="/" className="logo">
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        sizes="144px"
        loading={eager ? "eager" : "lazy"}
        className="logo-image"
      />
    </Link>
  );
}
