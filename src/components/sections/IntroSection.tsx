import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface IntroSectionProps {
  content: SiteContent["intro"];
}

export function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="section" id={content.id}>
      <Container className="intro-section">
        <SectionHeading
          className="intro-section__heading"
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="intro-section__highlights">
          {content.highlights.map((item) => (
            <article key={item.title} className="intro-highlight">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

