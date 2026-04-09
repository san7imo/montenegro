import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ContactSection } from "./components/sections/ContactSection";
import { CtaSection } from "./components/sections/CtaSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FaqSection } from "./components/sections/FaqSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { IntroSection } from "./components/sections/IntroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { siteContent } from "./content/siteContent";

function App() {
  return (
    <div className="site-shell">
      <Navbar
        action={siteContent.hero.primaryAction}
        brand={siteContent.brand}
        navigation={siteContent.navigation}
      />

      <main>
        <HeroSection content={siteContent.hero} />
        <IntroSection content={siteContent.intro} />
        <ServicesSection content={siteContent.services} />
        <ExperienceSection content={siteContent.experience} />
        <GallerySection content={siteContent.gallery} />
        <FaqSection content={siteContent.faq} />
        <CtaSection content={siteContent.cta} />
        <ContactSection content={siteContent.contact} />
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

export default App;
