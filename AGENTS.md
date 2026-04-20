# AGENTS.md

## Proyecto
Rediseño del sitio de **Montenegro Salud y Belleza**.

## Estado actual
El proyecto existe en **React + TypeScript + Vite** y hoy funciona como una **one page**. La siguiente fase ya no debe continuar esa lógica: el sitio debe evolucionar a una **experiencia multipágina**, con una home comercial renovada y páginas dedicadas para servicios.

## Objetivo de esta actualización
Rediseñar por completo la web para que:

- tome como referencia visual los **mockups/imágenes** disponibles en el repositorio
- conserve la **paleta oficial de marca**
- mantenga una sensación **premium, limpia, femenina y serena**
- deje de ser una single-page y pase a una estructura **multipágina**
- prepare una base sólida para crecimiento posterior

---

# 1. Fuentes de verdad para este rediseño

## Material disponible
- `Manual de marca Montenegro.pdf`
- `Mockups 1.png`
- `Mockups 2.png`
- `Mockups 3.png`
- logotipo y assets de marca presentes en el proyecto
- imágenes reales del negocio disponibles en el repositorio

## Interpretación de las referencias visuales
Las imágenes de mockup no son layouts web terminados; deben leerse como **referencias de lenguaje visual de marca**:

- composición sobria
- mucho aire visual
- superficies claras y limpias
- presencia elegante del logotipo
- contraste controlado
- sensación editorial y premium

La web debe **traducir ese lenguaje a interfaz**, no copiar literalmente los mockups como si fueran banners.

## Regla si faltan imágenes
Si para una sección o página no existe una imagen aprobada:

- dejar un bloque visual preparado
- usar color, textura sutil o contenedor placeholder elegante
- no rellenar con stock no aprobado
- no duplicar artificialmente fotografías para aparentar más material

---

# 2. Restricciones de contenido

## Sí hacer
- redactar copy comercial sobrio, natural y creíble
- mantener el tono femenino, cercano y sereno
- usar categorías editables cuando falte información definitiva
- centralizar textos, links, slugs y datos editables

## No hacer
- no inventar promociones
- no inventar precios
- no inventar testimonios reales
- no inventar sedes, horarios, certificaciones o trayectoria no confirmada
- no afirmar tratamientos o beneficios médicos no validados

La versión nueva debe corregir cualquier copy demasiado específico que hoy no esté respaldado.

---

# 3. Lineamientos visuales obligatorios

## Paleta oficial
Usar como variables base:

```css
--color-fucsia: #980562;
--color-azul: #05012a;
--color-rosa: #ffcaf0;
--color-blanco: #ffffff;
```

## Uso del color
- `#05012a`: tipografía principal, bloques de contraste, footer, overlays sobrios
- `#980562`: CTAs, acentos, detalles interactivos, indicadores
- `#ffcaf0`: fondos suaves, tarjetas destacadas, respiración visual
- `#ffffff`: base principal, espacios amplios, contraste limpio

## Tipografía
- acento de marca: `Vivaldi Italic` solo en momentos puntuales
- textos funcionales: `"Yu Gothic UI", "Yu Gothic", "Segoe UI", sans-serif`

## Dirección estética
El nuevo sitio debe sentirse:

- elegante
- ligero
- calmado
- premium
- femenino sin exceso ornamental
- moderno sin verse frío

Evitar:

- sliders
- composiciones densas
- gradientes agresivos
- sombras pesadas
- bloques gigantes de texto
- recursos visuales ruidosos

---

# 4. Cambio de arquitectura: de one page a multipágina

## Decisión de producto
La actualización abandona la estructura de landing única. A partir de esta fase, el sitio debe trabajar con rutas reales.

## Arquitectura inicial requerida

### Ruta `/`
Home comercial renovada, enfocada en:
- presentación de marca
- propuesta de valor
- resumen de servicios
- bloques visuales alineados al nuevo lenguaje
- CTA a contacto y páginas de servicio

### Ruta `/servicios`
Índice de servicios:
- listado claro de categorías
- tarjetas o bloques editoriales
- navegación a cada detalle

### Ruta `/servicios/:slug`
Plantilla reusable para páginas de detalle:
- hero específico
- descripción general
- beneficios o enfoque
- bloque visual
- CTA a contacto o WhatsApp

### Ruta `/contacto`
Página independiente de contacto:
- canales de contacto editables
- layout preparado para dirección, horario y WhatsApp
- formulario visual simple si aplica en frontend

## Rutas opcionales si el diseño lo pide
Se pueden añadir más adelante:
- `/nosotros`
- `/galeria`
- `/faq`

Pero el mínimo de esta actualización es: **home + índice de servicios + detalle de servicio + contacto**.

---

# 5. Estructura de contenido y datos

Todo el contenido editable debe salir de archivos centrales, no de hardcodes dispersos en componentes.

## Archivos esperados
- `src/content/siteContent.ts`
- `src/content/servicesContent.ts` o equivalente
- constantes compartidas para navegación, CTAs y contacto

## Los datos de servicios deben contemplar
- `slug`
- `title`
- `shortDescription`
- `description`
- `highlights`
- `heroImage`
- `galleryImage` o placeholder
- `cta`

Si faltan imágenes por servicio, dejar el campo preparado y renderizar un espacio elegante de reemplazo.

---

# 6. Dirección de diseño para la nueva UI

## Header
- navegación persistente entre páginas
- comportamiento claro en scroll
- CTA visible
- estado mobile limpio y liviano

## Home
Debe tomar del material visual:
- sensación editorial
- bloques amplios
- jerarquía tipográfica más limpia
- protagonismo de imagen y marca sin saturación

La home no debe depender de anclas internas como navegación principal.

## Servicios
Las páginas de servicios no deben verse como modales ni como secciones recicladas de la home. Deben sentirse como páginas reales, con estructura propia y consistencia visual.

## Bloques visuales
Usar:
- fotografías reales disponibles
- placeholders bien integrados si faltan assets
- formas suaves inspiradas en el isotipo
- detalles finos de color de marca

No usar:
- stock no aprobado
- iconografía recargada
- marcos decorativos excesivos

---

# 7. Stack y criterios técnicos

## Base obligatoria
- React
- TypeScript
- Vite

## Librerías permitidas si aportan valor real
- `react-router-dom` para la arquitectura multipágina
- `clsx` si simplifica composición de clases
- `lucide-react` si la iconografía realmente hace falta

No agregar dependencias por moda.

## Criterios técnicos
- componentes reutilizables
- layout compartido
- rutas tipadas y claras
- contenido centralizado
- tipado limpio para navegación y servicios
- assets optimizados
- semántica y accesibilidad básica correctas

---

# 8. Hitos de ejecución para esta actualización

## Hito 1 — Definición visual y reestructuración base
### Objetivo
Aterrizar el rediseño con una base técnica coherente antes de tocar todas las pantallas.

### Tareas
- revisar manual y mockups
- traducir referencias visuales a decisiones de UI web
- limpiar el enfoque actual one page
- definir mapa de rutas
- ajustar estructura de contenido para multipágina
- actualizar componentes base, layout y navegación global

### Entregable
- arquitectura del proyecto lista para multipágina
- sistema base alineado con la nueva dirección visual

## Hito 2 — Home rediseñada
### Objetivo
Reconstruir la página principal con el nuevo lenguaje visual.

### Tareas
- rediseñar hero
- rehacer secciones principales
- ajustar jerarquías, espaciados y CTAs
- reemplazar la lógica de navegación por anclas como patrón principal
- integrar imágenes reales o placeholders donde corresponda

### Entregable
- home terminada y consistente con la nueva línea visual

## Hito 3 — Ecosistema de servicios
### Objetivo
Crear la navegación y las páginas dedicadas para servicios.

### Tareas
- crear página índice de servicios
- crear plantilla reusable de detalle por servicio
- definir slugs y estructura de datos
- conectar CTAs desde home hacia páginas internas
- dejar campos listos para ampliar servicios después

### Entregable
- flujo completo de servicios funcionando con rutas reales

## Hito 4 — Contacto, pulido y entrega técnica
### Objetivo
Cerrar la experiencia multipágina y dejarla lista para validar.

### Tareas
- crear o refinar página de contacto
- revisar header/footer globales
- corregir responsividad
- revisar accesibilidad básica
- validar placeholders faltantes
- pasar build de producción
- dejar notas breves para futura edición

### Entregable
- MVP multipágina listo para revisión

---

# 9. Criterios de aceptación

El trabajo se considera bien encaminado si:

- la web deja de depender de una arquitectura one page
- el rediseño recoge el lenguaje visual de los mockups sin salir de la paleta oficial
- la home y las páginas internas se sienten parte de un mismo sistema
- existe una ruta índice de servicios y al menos una plantilla de detalle reusable
- el contenido queda centralizado y fácil de editar
- faltantes de imagen quedan resueltos con espacios preparados, no con relleno falso
- el sitio se ve sólido en móvil y escritorio

---

# 10. Instrucciones de ejecución

## Haz
- avanzar por hitos
- agrupar cambios por bloques funcionales
- validar arquitectura antes de refinar detalles visuales
- priorizar primero estructura y navegación, luego detalle visual
- respetar el manual de marca por encima de decisiones arbitrarias

## No hagas
- no seguir extendiendo la versión actual como una one page
- no dejar servicios importantes enterrados dentro de la home
- no convertir los mockups en decoración vacía
- no meter imágenes no aprobadas
- no inventar información comercial específica
- no romper la consistencia entre páginas

---

# 11. Nota para implementación

Antes de arrancar cada hito:

1. confirmar qué partes del diseño actual se conservan y cuáles se reemplazan
2. priorizar reutilización de componentes cuando tenga sentido
3. si una imagen no existe todavía, dejar el bloque listo con placeholder elegante
4. mantener siempre navegabilidad real entre páginas
