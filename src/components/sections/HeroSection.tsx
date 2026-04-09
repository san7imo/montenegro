import type { CSSProperties } from "react";
import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

interface HeroSectionProps {
  content: SiteContent["hero"];
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="hero-section"
      id="inicio"
      style={{ "--hero-image": `url(${content.backgroundImage})` } as CSSProperties}
    >
      <Container className="hero-section__layout">
        <div className="hero-section__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <p className="hero-section__accent">{content.accent}</p>
          <h1>{content.title}</h1>
          <p className="hero-section__description">{content.description}</p>

          <div className="hero-section__actions">
            <ButtonLink href={content.primaryAction.href} label={content.primaryAction.label} />
            <ButtonLink
              href={content.secondaryAction.href}
              label={content.secondaryAction.label}
              variant="secondary"
            />
          </div>

          <ul className="hero-section__highlights" aria-label="Destacados">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
