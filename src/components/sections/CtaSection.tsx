import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

interface CtaSectionProps {
  content: SiteContent["cta"];
}

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className="section section--soft section--compact">
      <Container>
        <div className="cta-band">
          <div className="cta-band__copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>

          <div className="cta-band__actions">
            <ButtonLink href={content.primaryAction.href} label={content.primaryAction.label} />
            <ButtonLink
              href={content.secondaryAction.href}
              label={content.secondaryAction.label}
              variant="secondary"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

