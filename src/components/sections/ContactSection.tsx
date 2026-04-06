import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ContactSectionProps {
  content: SiteContent["contact"];
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className="section" id={content.id}>
      <Container className="contact-section">
        <div>
          <SectionHeading
            className="contact-section__heading"
            description={content.description}
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <div className="contact-details">
            {content.details.map((item) => (
              <article key={item.label} className="contact-detail">
                <p className="contact-detail__label">{item.label}</p>
                <h3>{item.value}</h3>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="contact-panel" aria-label="Bloque preparado para formulario">
          <p className="eyebrow">Formulario preparado</p>
          <h3>{content.panelTitle}</h3>
          <p>{content.panelDescription}</p>

          <div className="contact-panel__fields">
            {content.panelFields.map((field) => (
              <div key={field} className="contact-panel__field">
                <span>{field}</span>
              </div>
            ))}
          </div>

          <button className="contact-panel__button" disabled type="button">
            {content.panelAction}
          </button>
        </aside>
      </Container>
    </section>
  );
}

