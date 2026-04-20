import { ButtonLink } from "../components/ui/ButtonLink";
import { Container } from "../components/ui/Container";
import { VisualPanel } from "../components/ui/VisualPanel";
import { servicesContent } from "../content/servicesContent";
import { siteContent } from "../content/siteContent";

export function HomePage() {
  const { brand, home } = siteContent;
  const serviceTiles = servicesContent.slice(0, 3);

  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(56, 76, 63, 0.34) 0%, rgba(56, 76, 63, 0.68) 100%), url('/assets/montenegro-portada-olga.jpg')",
        }}
      >
        <Container className="home-hero__inner">
          <div className="home-hero__brand">
            <img
              alt={brand.name}
              className="home-hero__logo"
              decoding="async"
              src={brand.fullLogo}
            />
          </div>

          <div className="home-hero__content">
            <p className="home-hero__subtitle">{home.hero.title}</p>
            <p className="home-hero__description">{home.hero.description}</p>

            <div className="home-hero__actions">
              <ButtonLink label={home.hero.primaryAction.label} to={home.hero.primaryAction.to} />
              <ButtonLink
                label={home.hero.secondaryAction.label}
                to={home.hero.secondaryAction.to}
                variant="secondary"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--dark">
        <Container className="home-about">
          <div className="home-about__media">
            <VisualPanel asset={home.signature.visuals[0]} className="home-about__visual" />
          </div>

          <div className="home-about__copy">
            <p className="home-script">{home.intro.eyebrow}</p>
            <h2>{home.intro.title}</h2>
            <p>{home.intro.description}</p>
            <ButtonLink label="Agenda tu cita" to="/contacto" />
          </div>
        </Container>

        <Container className="home-showcase">
          <VisualPanel asset={home.signature.visuals[1]} className="home-showcase__visual" />
        </Container>
      </section>

      <section className="home-section home-section--soft">
        <Container className="home-benefits">
          <div className="home-benefits__header">
            <div className="home-benefits__headline">
              <p className="home-script">Por qué elegir Montenegro</p>
              <h2>{home.signature.title}</h2>
            </div>

            <div className="home-benefits__intro">
              <p>{home.signature.description}</p>
              <ButtonLink label="Ver servicios" to="/servicios" />
            </div>
          </div>

          <div className="home-benefits__grid">
            <article className="benefit-card">
              <div className="benefit-card__media">
                <VisualPanel asset={home.signature.visuals[2]} className="benefit-card__visual" />
              </div>
              <div className="benefit-card__copy">
                <p className="service-card__eyebrow">Atención</p>
                <h3>{home.intro.cards[0].title}</h3>
                <p>{home.intro.cards[0].description}</p>
              </div>
            </article>

            <article className="benefit-card benefit-card--placeholder">
              <div className="benefit-card__media benefit-card__media--placeholder" aria-hidden="true">
                <div className="benefit-card__mark" />
              </div>
              <div className="benefit-card__copy">
                <p className="service-card__eyebrow">Experiencia</p>
                <h3>{home.intro.cards[1].title}</h3>
                <p>{home.intro.cards[1].description}</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--dark-alt">
        <Container className="home-services">
          <div className="home-services__header">
            <p className="home-script">{home.services.eyebrow}</p>
            <h2>{home.services.title}</h2>
            <p>{home.services.description}</p>
          </div>

          <div className="home-services__grid">
            {serviceTiles.map((service, index) => (
              <article className="service-tile" key={service.slug}>
                <div
                  className={[
                    "service-tile__visual",
                    "service-tile__visual--placeholder",
                    `service-tile__visual--tone-${index + 1}`,
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <div className="service-tile__mark" />
                </div>

                <div className="service-tile__overlay">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <ButtonLink label="Ver detalle" to={`/servicios/${service.slug}`} variant="secondary" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
