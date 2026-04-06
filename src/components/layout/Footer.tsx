import type { NavItem, SiteContent } from "../../types/content";
import { Container } from "../ui/Container";

interface FooterProps {
  brand: SiteContent["brand"];
  navigation: NavItem[];
  note: string;
  copyright: string;
}

export function Footer({ brand, navigation, note, copyright }: FooterProps) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <img alt={brand.name} src={brand.logo} />
          <p className="site-footer__tagline">{brand.tagline}</p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__meta">
          <p>{note}</p>
          <p>© {new Date().getFullYear()} {copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

