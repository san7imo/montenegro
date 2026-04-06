import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

interface HeroSectionProps {
  content: SiteContent["hero"];
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero-section" id="inicio">
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
        </div>

        <div className="hero-section__visuals">
          <figure className="hero-figure">
            <img alt={content.image.alt} src={content.image.src} />
            <figcaption className="hero-figure__caption">
              <p>{content.image.caption}</p>
              <span>{content.image.note}</span>
            </figcaption>
          </figure>

          <div className="hero-note">
            <h2>{content.noteTitle}</h2>
            <p>{content.noteDescription}</p>
          </div>

          <div className="hero-rails">
            {content.rails.map((item) => (
              <article key={item.title}>
                <p>{item.title}</p>
                <span>{item.description}</span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

