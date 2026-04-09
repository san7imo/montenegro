import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface GallerySectionProps {
  content: SiteContent["gallery"];
}

export function GallerySection({ content }: GallerySectionProps) {
  return (
    <section className="section section--soft" id={content.id}>
      <Container>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="spotlight-grid">
          {content.items.map((item) => (
            <article key={item.title} className="spotlight-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>

              <span>{item.note}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
