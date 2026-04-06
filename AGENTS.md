# AGENTS.md

## Proyecto
Sitio web para **Montenegro Salud y Belleza**.

## Objetivo
Construir una web comercial, elegante y ligera en **React + TypeScript**, alineada con el manual de marca y preparada para crecer después a catálogo de servicios, reservas, testimonios y contacto por WhatsApp.

El sitio debe transmitir:
- delicadeza
- bienestar
- descanso físico y mental
- belleza
- confianza
- sensación premium sin verse recargado

## Contexto disponible
### Material confirmado
- Existe un **manual de marca en PDF** con lineamientos visuales.
- Existen **3 imágenes reales** proporcionadas por el cliente, que deben tratarse como los únicos recursos fotográficos reales disponibles por ahora.
- No hay suficiente información del negocio todavía, por lo que se deben redactar **textos naturales, comerciales, sobrios y creíbles**, evitando afirmaciones demasiado específicas o inventadas.

### Restricciones de contenido
- No inventar promociones, precios, tratamientos específicos, sedes, horarios ni testimonios reales.
- No inventar equipo humano, certificaciones o años de experiencia si no fueron confirmados.
- Cuando falte información, usar copy comercial neutro y profesional.
- Mantener el tono femenino, elegante, cercano y sereno.

---

# 1. Lineamientos de marca que deben gobernar toda la implementación

## Identidad visual
La marca usa un isotipo orgánico/minimalista inspirado en una **flor de loto** y en la inicial **M**, con una intención explícita de comunicar **delicadeza, belleza, tranquilidad y descanso físico o mental**.

## Paleta oficial
Usar como variables globales del proyecto:

```css
--color-fucsia: #980562;
--color-azul: #05012a;
--color-rosa: #ffcaf0;
--color-blanco: #ffffff;
```

## Uso recomendado de color en web
- **Azul oscuro (`#05012a`)**: textos principales, fondos de contraste, overlays elegantes, footer.
- **Fucsia (`#980562`)**: botones principales, acentos, íconos, estados hover, divisores sutiles.
- **Rosa (`#ffcaf0`)**: fondos suaves de secciones, tarjetas destacadas, bloques respirables.
- **Blanco (`#ffffff`)**: fondos limpios, contraste, aire visual.

## Tipografías del manual
- **Primaria de marca:** `Vivaldi Italic`
- **Secundaria / textos:** `Yu Gothic UI`

## Criterio de implementación tipográfica en web
`Vivaldi Italic` no debe usarse en exceso. En web debe reservarse para:
- logotipo
- títulos hero muy puntuales
- frases cortas de acento visual

Para todo el contenido funcional, navegación, párrafos, botones y formularios, usar una sans-serif equivalente a **Yu Gothic UI** o una alternativa web-safe cercana.

### Fallback sugerido
```css
font-family: "Yu Gothic UI", "Yu Gothic", "Segoe UI", sans-serif;
```

## Reglas visuales obligatorias
- No alterar colores del logotipo.
- No rotar, deformar, animar ni modificar el logo.
- No aplicar transparencias impropias sobre la marca.
- Respetar el área de seguridad del logo.
- Evitar composiciones saturadas.
- Mantener abundante espacio en blanco.
- Priorizar elegancia y calma sobre efectos llamativos.

## Dirección estética del sitio
El sitio debe sentirse como:
- premium
- femenino
- delicado
- limpio
- relajante
- moderno pero no frío

Evitar:
- gradientes agresivos
- sombras muy pesadas
- animaciones invasivas
- sliders innecesarios
- exceso de ornamentos
- bloques densos de texto

---

# 2. Enfoque de producto para la web

## Tipo de sitio a construir
Primera versión tipo **landing page / sitio corporativo comercial** con estructura modular.

Debe quedar listo para evolucionar después a:
- sección de servicios ampliada
- reservas por WhatsApp o formulario
- testimonios
- galería real del centro
- preguntas frecuentes
- integración futura con agenda

## Objetivo del MVP
Lograr una presencia web profesional que:
1. presente la marca con coherencia visual
2. comunique bienestar y belleza
3. muestre servicios de forma atractiva
4. use las 3 imágenes reales disponibles
5. convierta visitas en contactos

---

# 3. Arquitectura de información propuesta

Construir el sitio inicialmente con estas secciones:

1. **Header / Navbar**
2. **Hero principal**
3. **Sección de bienvenida / presentación**
4. **Servicios destacados**
5. **Experiencia / por qué elegirnos**
6. **Galería visual** usando las 3 imágenes reales
7. **CTA principal** hacia WhatsApp o contacto
8. **Contacto / ubicación / formulario simple**
9. **Footer**

## Detalle por sección

### Header
Debe incluir:
- logo
- navegación con scroll suave
- CTA visible: `Agenda tu cita` o `Contáctanos`

Comportamiento:
- transparente o muy liviano sobre hero
- solid al hacer scroll
- mobile-first con menú hamburguesa

### Hero
Debe comunicar de inmediato:
- salud
- belleza
- bienestar
- experiencia relajante

Debe incluir:
- título principal comercial
- breve descripción
- botón principal
- botón secundario opcional
- una imagen real o composición elegante con una de las 3 imágenes

No recargar el hero con demasiada información.

### Presentación
Bloque breve de marca con texto humano y creíble. Enfatizar:
- atención personalizada
- espacio pensado para el bienestar
- acompañamiento estético
- ambiente de calma y cuidado

### Servicios destacados
Como no hay servicios confirmados, trabajar con categorías comerciales genéricas y editables, por ejemplo:
- tratamientos faciales
- cuidado corporal
- bienestar y relajación
- atención personalizada

Esto debe quedar claramente estructurado para edición posterior.

### Experiencia / beneficios
Usar tarjetas o bloques con mensajes como:
- atención cercana
- espacios pensados para tu comodidad
- enfoque en bienestar integral
- experiencia estética con calidez

### Galería
Usar únicamente las imágenes reales disponibles.
No duplicarlas artificialmente para simular más contenido.
Se puede presentar:
- grid elegante
- collage limpio
- masonry simple

### CTA
Bloque fuerte pero sobrio con fondo de contraste.
Mensaje orientado a conversión:
- agenda tu cita
- solicita información
- descubre una experiencia pensada para ti

### Contacto
Preparar el layout para:
- teléfono / WhatsApp
- dirección editable
- horario editable
- formulario simple
- redes sociales si existen

Si esos datos no existen todavía, dejar placeholders claramente localizables en constantes o archivo de contenido.

### Footer
Debe incluir:
- nombre de marca
- navegación resumida
- datos de contacto editables
- copyright

---

# 4. Estrategia de contenido

## Tono de redacción
Redactar textos en español con tono:
- comercial
- cálido
- elegante
- natural
- confiable
- femenino sin caer en clichés excesivos

## Estilo de copy
Priorizar frases como:
- bienestar
- cuidado
- armonía
- experiencia
- atención personalizada
- belleza que se siente
- espacio pensado para ti

Evitar:
- exageraciones
- claims médicos
- frases muy vacías
- lenguaje demasiado genérico tipo plantilla barata

## Regla de copy placeholder
Todo texto debe sonar suficientemente real como para publicar una primera versión mientras el cliente entrega información definitiva.

Crear el contenido de forma centralizada en un archivo tipo:

```ts
src/content/siteContent.ts
```

o similar, para que luego sea fácil editar textos, CTAs, servicios y contacto.

---

# 5. Stack técnico obligatorio

## Base
- React
- TypeScript
- Vite

## Estilo
Preferiblemente una de estas dos opciones:
1. **Tailwind CSS** si se desea velocidad y consistencia.
2. CSS Modules si se desea control más clásico.

**Preferencia recomendada:** Tailwind CSS.

## Librerías sugeridas
Usar solo si aportan valor real:
- `react-router-dom` solo si se crean rutas reales
- `framer-motion` para microanimaciones suaves
- `lucide-react` para iconografía
- `clsx` para composición de clases

No meter dependencias innecesarias.

## Rendimiento
- Optimizar imágenes
- Lazy load donde tenga sentido
- Componentes pequeños y reutilizables
- Evitar renderizados complejos
- Mantener Lighthouse alto

---

# 6. Estructura técnica sugerida

```txt
src/
  assets/
    images/
    brand/
  components/
    layout/
    sections/
    ui/
  content/
    siteContent.ts
  data/
  hooks/
  lib/
  styles/
  App.tsx
  main.tsx
```

## Componentes esperados
- `Navbar`
- `HeroSection`
- `IntroSection`
- `ServicesSection`
- `BenefitsSection`
- `GallerySection`
- `CtaSection`
- `ContactSection`
- `Footer`
- componentes UI reutilizables (`Button`, `SectionTitle`, `Container`, `Card`)

---

# 7. Sistema visual a implementar

## Layout
- contenedor máximo elegante
- buena respiración vertical entre secciones
- jerarquía tipográfica clara
- diseño mobile-first

## Bordes y formas
Inspirarse sutilmente en la suavidad del isotipo.
Se pueden usar:
- bordes redondeados medianos
- shapes suaves en fondos
- líneas orgánicas muy discretas

No copiar literalmente el manual como fondo pesado en toda la página.
La inspiración debe ser sutil.

## Fondos
Alternar de forma limpia:
- blanco
- rosa suave
- bloques oscuros azul profundo para contraste

## Botones
### Primario
- fondo fucsia
- texto claro
- hover elegante

### Secundario
- fondo transparente o blanco
- borde azul o fucsia
- texto sobrio

## Iconografía
Minimalista, limpia, coherente con bienestar y estética.

---

# 8. Uso de imágenes

## Regla principal
Solo usar las 3 imágenes disponibles en el repositorio como imágenes reales del proyecto.

## Implementación esperada
- Revisar proporciones
- Crear versiones optimizadas si es necesario
- Reutilizarlas con criterio, no de forma repetitiva o artificial
- Aplicar overlays suaves cuando ayuden a legibilidad
- Mantener foco visual elegante

## Si faltan imágenes para alguna sección
Resolver con:
- fondos limpios
- bloques tipográficos
- shapes suaves
- composiciones con color de marca

No rellenar con stock falso a menos que el cliente lo apruebe explícitamente.

---

# 9. Accesibilidad y calidad

## Accesibilidad mínima
- contraste suficiente
- `alt` en imágenes
- estructura semántica correcta
- navegación por teclado razonable
- botones y enlaces claros

## Calidad de implementación
- código limpio
- tipado correcto
- componentes desacoplados
- sin hardcodes dispersos
- constantes para colores, textos y enlaces

---

# 10. Hitos de trabajo

## Hito 0 — Auditoría inicial del material
### Objetivo
Entender el manual de marca y localizar los assets disponibles.

### Tareas
- revisar el manual de marca completo
- identificar paleta, tipografías, tono visual y restricciones
- localizar las 3 imágenes disponibles en el repositorio
- validar formatos y pesos de imágenes
- documentar decisiones base de UI

### Entregable
- breve resumen técnico de decisiones visuales antes de implementar

---

## Hito 1 — Inicialización del proyecto
### Objetivo
Dejar lista la base técnica del sitio.

### Tareas
- crear proyecto con Vite + React + TypeScript
- configurar estructura de carpetas
- instalar Tailwind CSS si se usa
- limpiar archivos de ejemplo
- configurar alias si aplica
- crear layout base

### Entregable
- proyecto corriendo con estructura inicial limpia

---

## Hito 2 — Sistema de diseño base
### Objetivo
Traducir el manual de marca a tokens y utilidades reutilizables.

### Tareas
- crear variables globales de color
- configurar tipografías y fallbacks
- definir escalas de espaciado
- crear clases/utilidades de contenedor
- crear estilos base para títulos, párrafos y botones
- definir estándares de sombras, radios y fondos

### Entregable
- sistema visual consistente listo para usar en todas las secciones

---

## Hito 3 — Estructura de contenido editable
### Objetivo
Evitar textos hardcodeados dentro de los componentes.

### Tareas
- crear archivo central de contenido
- definir textos del hero
- definir textos de bienvenida
- definir servicios genéricos editables
- definir beneficios
- definir CTAs
- definir datos de contacto placeholders

### Entregable
- archivo de contenido único y reutilizable

---

## Hito 4 — Header y navegación responsive
### Objetivo
Construir una navegación elegante y usable.

### Tareas
- implementar navbar desktop
- implementar menú móvil
- agregar CTA principal
- hacer scroll suave a secciones
- manejar estado de navbar al hacer scroll
- asegurar legibilidad sobre hero

### Entregable
- header completamente responsive y funcional

---

## Hito 5 — Hero principal
### Objetivo
Construir una entrada visual fuerte, alineada a marca y orientada a conversión.

### Tareas
- diseñar hero con una imagen real o composición visual sobria
- integrar título, descripción y CTAs
- ajustar overlay para legibilidad
- garantizar equilibrio visual en mobile y desktop
- mantener un look premium y relajante

### Entregable
- hero final listo

---

## Hito 6 — Secciones de presentación y servicios
### Objetivo
Comunicar qué ofrece la marca sin depender de información demasiado específica.

### Tareas
- implementar sección de bienvenida
- implementar bloque de servicios destacados
- crear tarjetas editables
- mantener copy natural y comercial
- cuidar ritmo visual entre secciones

### Entregable
- cuerpo medio del sitio funcional y visualmente consistente

---

## Hito 7 — Sección de experiencia/beneficios y galería
### Objetivo
Aumentar confianza y aprovechar el material visual disponible.

### Tareas
- construir bloque de beneficios o diferenciales
- crear galería con las 3 imágenes reales
- optimizar imágenes
- asegurar diseño atractivo sin saturar
- definir orden visual correcto de las fotos

### Entregable
- bloque de confianza + galería final

---

## Hito 8 — CTA final, contacto y footer
### Objetivo
Cerrar el recorrido con conversión clara.

### Tareas
- implementar CTA principal
- construir sección de contacto
- agregar placeholders claros para WhatsApp, dirección, horarios y redes
- construir footer coherente con la marca
- verificar consistencia de enlaces y botones

### Entregable
- landing completa navegable de inicio a fin

---

## Hito 9 — Microinteracciones y refinamiento visual
### Objetivo
Pulir la experiencia sin romper la sobriedad de la marca.

### Tareas
- agregar animaciones suaves y discretas
- ajustar hovers de botones y cards
- mejorar transiciones del menú
- revisar spacing y jerarquías
- revisar balance visual general

### Entregable
- versión refinada visualmente

---

## Hito 10 — Responsividad, accesibilidad y performance
### Objetivo
Dejar el sitio listo para entrega técnica.

### Tareas
- revisar mobile, tablet y desktop
- corregir overflows y saltos de layout
- revisar accesibilidad básica
- optimizar imágenes y assets
- revisar SEO base: title, description, estructura semántica
- pasar revisión de calidad general

### Entregable
- MVP listo para deploy

---

## Hito 11 — Preparación para despliegue
### Objetivo
Dejar el proyecto listo para publicar.

### Tareas
- validar build de producción
- revisar rutas y assets
- documentar pasos de deploy
- dejar instrucciones para editar contenido
- preparar README breve del proyecto

### Entregable
- build estable y documentación mínima

---

# 11. Criterios de aceptación

El trabajo se considera bien hecho si:
- el sitio refleja claramente la marca Montenegro
- la experiencia visual comunica bienestar, delicadeza y profesionalismo
- el diseño se siente premium sin saturación
- el código queda limpio y mantenible
- el contenido placeholder suena real y comercial
- la web funciona correctamente en móvil y escritorio
- las 3 imágenes reales están bien integradas
- el sitio queda listo para una futura expansión

---

# 12. Indicaciones de ejecución para el agente

## Haz
- trabajar por hitos
- mantener commits o cambios agrupados por bloque funcional
- crear componentes reutilizables
- centralizar contenido editable
- respetar el manual de marca por encima de preferencias visuales arbitrarias
- priorizar elegancia, claridad y conversión

## No hagas
- no inventes módulos complejos que no fueron pedidos
- no agregues backend
- no agregues CMS
- no uses carruseles innecesarios
- no metas librerías por moda
- no cambies el lenguaje visual de la marca
- no uses imágenes stock no aprobadas
- no deformes el logo ni alteres sus colores

---

# 13. Propuesta de copy inicial de referencia

## Hero
### Título
Un espacio pensado para tu bienestar y tu belleza

### Descripción
En Montenegro Salud y Belleza vivimos el cuidado personal como una experiencia de armonía, atención cercana y bienestar. Creamos un entorno pensado para que te sientas cómoda, tranquila y segura en cada visita.

### CTA principal
Agenda tu cita

### CTA secundaria
Solicita información

## Presentación
Cuidar de ti también es regalarte una pausa. En Montenegro queremos ofrecerte una experiencia cálida y profesional, donde bienestar, belleza y atención personalizada se encuentran en un mismo lugar.

## Servicios
- Cuidado facial
- Bienestar corporal
- Experiencias de relajación
- Atención personalizada

## CTA final
Descubre una experiencia creada para resaltar tu bienestar.

---

# 14. Nota importante
Si en el repositorio aún no están las 3 imágenes, dejar el sitio preparado con espacios definidos para integrarlas fácilmente apenas se agreguen.
