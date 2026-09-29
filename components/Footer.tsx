import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          {siteConfig.independenceNotice && (
            <p className="footer-notice">
              <span className="footer-age" aria-hidden="true">
                18+
              </span>
              <span>{siteConfig.independenceNotice}</span>
            </p>
          )}
        </div>

        <nav aria-label="Footer" className="footer-nav">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {siteConfig.name}
        </p>
        <a href="#top" className="back-to-top">
          <Icon name="arrowUp" size={16} />
          Back to Top
        </a>
      </div>
    </footer>
  );
}
