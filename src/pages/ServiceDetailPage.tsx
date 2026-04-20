import { Navigate, useParams } from "react-router-dom";
import { servicesContent } from "../content/servicesContent";
import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";
import { VisualPanel } from "../components/ui/VisualPanel";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesContent.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate replace to="/servicios" />;
  }

  return (
    <>
      <section className="page-band page-band--hero">
        <Container className="detail-hero">
          <div className="detail-hero__copy">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="detail-hero__lead">{service.shortDescription}</p>
            <p className="detail-hero__description">{service.description}</p>
            <div className="detail-hero__actions">
              <ButtonLink label={service.cta.label} to={service.cta.to} />
              <ButtonLink label="Volver a servicios" to="/servicios" variant="secondary" />
            </div>
          </div>

          <VisualPanel asset={service.visual} className="detail-hero__visual" />
        </Container>
      </section>

      <section className="page-band page-band--soft">
        <Container className="detail-atmosphere">
          <div className="detail-atmosphere__label">Enfoque</div>
          <p>{service.atmosphere}</p>
        </Container>
      </section>

      <section className="page-band">
        <Container className="detail-grid detail-grid--editorial">
          <article className="detail-panel">
            <h2>{service.detailTitle}</h2>
            <p>{service.detailDescription}</p>
            <ul className="bullet-list">
              {service.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h2>{service.benefitsTitle}</h2>
            <ul className="bullet-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel detail-panel--journey">
            <h2>{service.journeyTitle}</h2>
            <ol className="journey-list">
              {service.journeySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="detail-cta">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Si deseas más información, estaremos encantados de orientarte y ayudarte a elegir la experiencia adecuada.</h2>
            <div className="detail-hero__actions">
              <ButtonLink label={service.cta.label} to={service.cta.to} />
              <ButtonLink label="Ver todos los servicios" to="/servicios" variant="secondary" />
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
