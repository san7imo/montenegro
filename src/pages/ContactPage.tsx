import { siteContent } from "../content/siteContent";
import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";
import { VisualPanel } from "../components/ui/VisualPanel";

export function ContactPage() {
  const { contactPage } = siteContent;
  const signatureVisual = siteContent.home.signature.visuals[0];

  return (
    <>
      <section className="page-band page-band--hero page-band--compact-top">
        <Container className="contact-hero">
          <div className="contact-hero__copy">
            <p className="eyebrow">{contactPage.eyebrow}</p>
            <h1>{contactPage.title}</h1>
            <p className="detail-hero__description">{contactPage.description}</p>
            <div className="contact-hero__actions">
              <ButtonLink label="Ver servicios" to="/servicios" />
              <ButtonLink label="Volver al inicio" to="/" variant="secondary" />
            </div>
          </div>

          <div className="contact-hero__aside">
            <VisualPanel asset={signatureVisual} className="contact-hero__visual" />
            <div className="contact-summary">
              <p className="eyebrow">Atención cercana</p>
              <ul className="bullet-list">
                {contactPage.panelItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-band">
        <Container className="contact-grid">
          <div className="contact-panel">
            <h2>Conversemos</h2>
            <div className="contact-list">
              {contactPage.channels.map((channel) => (
                <article className="contact-card" key={channel.label}>
                  <h3>{channel.label}</h3>
                  {channel.href ? (
                    <a className="contact-card__value contact-card__value--link" href={channel.href}>
                      {channel.value}
                    </a>
                  ) : (
                    <p className="contact-card__value">{channel.value}</p>
                  )}
                  <p>{channel.note}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="contact-panel contact-panel--aside">
            <h2>{contactPage.panelTitle}</h2>
            <p>{contactPage.panelDescription}</p>
            <ul className="bullet-list">
              {contactPage.panelItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="contact-panel__note">{contactPage.panelNote}</p>
            <div className="contact-panel__actions">
              <ButtonLink label="Ver servicios" to="/servicios" />
              <ButtonLink label="Volver al inicio" to="/" variant="secondary" />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
