import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ExperienceSectionProps {
  content: SiteContent["experience"];
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section className="section section--dark" id={content.id}>
      <Container>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          theme="dark"
          title={content.title}
        />

        <div className="experience-grid">
          {content.items.map((item) => (
            <article key={item.title} className="experience-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

