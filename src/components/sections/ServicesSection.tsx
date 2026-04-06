import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ServicesSectionProps {
  content: SiteContent["services"];
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="section section--soft" id={content.id}>
      <Container className="services-section">
        <SectionHeading
          className="services-section__heading"
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="services-list">
          {content.items.map((item, index) => (
            <article key={item.title} className="service-item">
              <p className="service-item__index">{String(index + 1).padStart(2, "0")}</p>
              <div className="service-item__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

