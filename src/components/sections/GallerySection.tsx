import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface GallerySectionProps {
  content: SiteContent["gallery"];
}

export function GallerySection({ content }: GallerySectionProps) {
  return (
    <section className="section" id={content.id}>
      <Container>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="gallery-grid">
          {content.items.map((item, index) => (
            <figure
              key={item.src}
              className={["gallery-item", index === 0 ? "gallery-item--featured" : ""].join(" ")}
            >
              <img alt={item.alt} loading="lazy" src={item.src} />
              <figcaption className="gallery-item__caption">
                <p>{item.caption}</p>
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

