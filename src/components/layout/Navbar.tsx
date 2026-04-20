import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import type { ActionTarget, SiteConfig, SiteRouteItem } from "../../types/content";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

interface NavbarProps {
  brand: SiteConfig["brand"];
  navigation: SiteRouteItem[];
  action: ActionTarget;
}

export function Navbar({ brand, navigation, action }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isOverlayHeader = isHome && !isScrolled;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "site-header",
        isOverlayHeader ? "site-header--home" : "",
        isScrolled ? "site-header--solid" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className="site-header__inner">
        <Link aria-label={brand.name} className="brand-link" to="/">
          <img alt={brand.name} className="brand-link__image" src={brand.logo} />
        </Link>

        <nav aria-label="Principal" className="site-nav site-nav--desktop">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) => ["site-nav__link", isActive ? "site-nav__link--active" : ""].filter(Boolean).join(" ")}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <ButtonLink label={action.label} to={action.to} />
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

      <div className={["mobile-menu", menuOpen ? "mobile-menu--open" : ""].filter(Boolean).join(" ")} id="mobile-menu">
        <Container className="mobile-menu__inner">
          <nav aria-label="Principal móvil" className="site-nav site-nav--mobile">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => ["site-nav__link", isActive ? "site-nav__link--active" : ""].filter(Boolean).join(" ")}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ButtonLink className="mobile-menu__cta" label={action.label} to={action.to} variant="secondary" />
        </Container>
      </div>
    </header>
  );
}
