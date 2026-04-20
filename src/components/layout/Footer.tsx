import { Link, NavLink } from "react-router-dom";
import type { SiteConfig, SiteRouteItem } from "../../types/content";
import { Container } from "../ui/Container";

interface FooterProps {
  brand: SiteConfig["brand"];
  navigation: SiteRouteItem[];
  note: string;
  copyright: string;
}

export function Footer({ brand, navigation, note, copyright }: FooterProps) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <Link aria-label={brand.name} className="site-footer__brand-link" to="/">
            <img alt={brand.name} src={brand.logo} />
          </Link>
          <p className="site-footer__tagline">{brand.tagline}</p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) => ["site-footer__link", isActive ? "site-footer__link--active" : ""].filter(Boolean).join(" ")}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
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
