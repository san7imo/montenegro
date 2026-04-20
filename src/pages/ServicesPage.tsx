import { servicesContent } from "../content/servicesContent";
import { siteContent } from "../content/siteContent";
import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";
import { VisualPanel } from "../components/ui/VisualPanel";

export function ServicesPage() {
  const { servicesPage } = siteContent;
  const featuredService = servicesContent[0];

  return (
    <>
      <section className="page-band page-band--hero page-band--compact-top">
        <Container className="services-hero">
          <div className="services-hero__copy">
            <SectionHeading
              description={servicesPage.description}
              eyebrow={servicesPage.eyebrow}
              title={servicesPage.title}
            />
            <div className="services-hero__actions">
              <ButtonLink label="Agenda tu cita" to="/contacto" />
              <ButtonLink label="Volver al inicio" to="/" variant="secondary" />
            </div>
          </div>

          <div className="services-hero__visuals">
            <VisualPanel asset={featuredService.visual} className="services-hero__panel services-hero__panel--large" />
            <VisualPanel asset={siteContent.home.signature.visuals[2]} className="services-hero__panel" />
          </div>
        </Container>
      </section>

      <section className="page-band">
        <Container className="services-intro">
          <article className="services-intro__note">
            <p className="eyebrow">Nuestra propuesta</p>
            <h2>Cada línea de cuidado tiene su propio enfoque.</h2>
            <p>
              Explora una selección de experiencias pensadas para bienestar, belleza y atención cercana, con una
              presentación clara para que puedas conocer mejor cada servicio.
            </p>
          </article>

          <article className="services-featured">
            <div className="services-featured__copy">
              <p className="service-card__eyebrow">{featuredService.eyebrow}</p>
              <h3>{featuredService.title}</h3>
              <p>{featuredService.atmosphere}</p>
              <ButtonLink label="Conocer servicio" to={`/servicios/${featuredService.slug}`} variant="secondary" />
            </div>
          </article>
        </Container>
      </section>

      <section className="page-band page-band--soft">
        <Container className="service-grid service-grid--page">
          {servicesContent.map((service) => (
            <article className="service-card service-card--page" key={service.slug}>
              <VisualPanel asset={service.visual} />
              <div className="service-card__body">
                <p className="service-card__eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <ul className="bullet-list">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ButtonLink label="Ver detalle" to={`/servicios/${service.slug}`} />
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
