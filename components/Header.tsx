import { ctaLinks, sectionNav } from "@/config/site";
import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="container header-inner">
        <Logo eager />

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {sectionNav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <CtaButton link={ctaLinks.download} icon="download" className="header-download" />
          <MobileMenu items={sectionNav} />
        </div>
      </div>
    </header>
  );
}
