import { Outlet, useLocation } from "react-router-dom";
import { siteContent } from "../../content/siteContent";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Ir al contenido principal
      </a>

      <Navbar
        action={siteContent.primaryAction}
        brand={siteContent.brand}
        navigation={siteContent.navigation}
      />

      <main className={["site-main", isHome ? "site-main--home" : ""].filter(Boolean).join(" ")} id="main-content">
        <Outlet />
      </main>

      <Footer
        brand={siteContent.brand}
        copyright={siteContent.footer.copyright}
        navigation={siteContent.navigation}
        note={siteContent.footer.note}
      />
    </div>
  );
}
