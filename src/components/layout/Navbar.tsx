import { useEffect, useState } from "react";
import type { LinkAction, NavItem, SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

interface NavbarProps {
  brand: SiteContent["brand"];
  navigation: NavItem[];
  action: LinkAction;
}

export function Navbar({ brand, navigation, action }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className={["site-header", isScrolled ? "site-header--solid" : ""].join(" ")}>
      <Container className="site-header__inner">
        <a aria-label={brand.name} className="brand-link" href="#inicio">
          <img alt={brand.name} className="brand-link__image" src={brand.logo} />
        </a>

        <nav aria-label="Principal" className="site-nav site-nav--desktop">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__cta">
          <ButtonLink href={action.href} label={action.label} />
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>
      </Container>

      <div className={["mobile-menu", menuOpen ? "mobile-menu--open" : ""].join(" ")} id="mobile-menu">
        <Container className="mobile-menu__inner">
          <nav aria-label="Principal móvil" className="site-nav site-nav--mobile">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <ButtonLink
            className="mobile-menu__cta"
            href={action.href}
            label={action.label}
            variant="secondary"
          />
        </Container>
      </div>
    </header>
  );
}

