import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";

export function NotFoundPage() {
  return (
    <section className="page-band page-band--hero page-band--full">
      <Container className="not-found">
        <p className="eyebrow">Ruta no encontrada</p>
        <h1>No encontramos la página que estás buscando.</h1>
        <p className="detail-hero__description">
          Puedes volver al inicio o explorar los servicios disponibles para continuar tu recorrido dentro de
          Montenegro.
        </p>
        <div className="detail-hero__actions">
          <ButtonLink label="Ir al inicio" to="/" />
          <ButtonLink label="Ver servicios" to="/servicios" variant="secondary" />
        </div>
      </Container>
    </section>
  );
}
