import type { SiteContent } from "../../types/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface FaqSectionProps {
  content: SiteContent["faq"];
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section className="section" id={content.id}>
      <Container>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="faq-grid">
          {content.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
