import type { SiteContent } from "../types/content";

export const siteContent: SiteContent = {
  brand: {
    name: "Montenegro Salud y Belleza",
    shortName: "Montenegro",
    tagline: "Bienestar que se siente. Presencia que permanece.",
    logo: "/assets/logo-montenegro.png",
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Montenegro Salud y Belleza",
    accent: "Bienestar que se siente. Presencia que permanece.",
    title: "Un espacio pensado para tu bienestar y tu belleza",
    description:
      "En Montenegro Salud y Belleza el cuidado personal se entiende como una experiencia serena, elegante y cercana. Cada detalle está orientado a que te sientas cómoda, tranquila y acompañada desde el primer contacto.",
    primaryAction: {
      label: "Agenda tu cita",
      href: "#contacto",
    },
    secondaryAction: {
      label: "Explorar el recorrido",
      href: "#servicios",
    },
    noteTitle: "Una identidad visual que respira calma",
    noteDescription:
      "La marca combina limpieza formal, delicadeza y contraste controlado para proyectar confianza sin excesos.",
    image: {
      src: "/assets/mockup-1.webp",
      alt: "Aplicación del logotipo Montenegro en una señal exterior iluminada",
      caption: "Presencia exterior",
      note: "Un primer contacto limpio, reconocible y sobrio.",
    },
    rails: [
      {
        title: "Lenguaje",
        description: "Sutil, femenino y premium sin recurrir a ornamentos pesados.",
      },
      {
        title: "Material visual",
        description: "Logo original y tres aplicaciones gráficas integradas con criterio.",
      },
    ],
  },
  intro: {
    id: "nosotros",
    eyebrow: "Bienvenida",
    title: "Cuidar de ti también es regalarte una pausa",
    description:
      "Montenegro nace para acompañar procesos de bienestar y belleza desde una atmósfera tranquila, profesional y cálida. La experiencia busca equilibrio: una atención cercana, una estética limpia y un entorno que invite a bajar el ritmo.",
    highlights: [
      {
        title: "Atención cercana",
        description: "Una experiencia pensada para escuchar, orientar y cuidar con sensibilidad.",
      },
      {
        title: "Ambiente sereno",
        description: "Espacios y decisiones visuales que privilegian calma, orden y respiración.",
      },
      {
        title: "Estética sobria",
        description: "Una imagen premium construida desde proporción, luz y materiales limpios.",
      },
    ],
  },
  services: {
    id: "servicios",
    eyebrow: "Servicios destacados",
    title: "Una estructura clara para presentar el portafolio sin saturar la página",
    description:
      "Como todavía no existe un catálogo definitivo, esta primera versión ordena categorías comerciales amplias y editables para que el sitio pueda publicarse con naturalidad y crecer después.",
    items: [
      {
        title: "Cuidado facial",
        description: "Rutinas y experiencias orientadas a frescura, armonía y atención delicada del rostro.",
      },
      {
        title: "Bienestar corporal",
        description: "Espacios pensados para acompañar procesos de cuidado, descanso y sensación de ligereza.",
      },
      {
        title: "Experiencias de relajación",
        description: "Momentos concebidos para bajar el ritmo, reconectar y regalarte una pausa consciente.",
      },
      {
        title: "Atención personalizada",
        description: "Un enfoque cercano para adaptar la experiencia a cada persona con calidez y criterio.",
      },
    ],
  },
  experience: {
    id: "experiencia",
    eyebrow: "Experiencia",
    title: "Una propuesta que prioriza comodidad, calma y confianza",
    description:
      "La sobriedad del diseño ayuda a que el mensaje principal se mantenga claro: un lugar pensado para el bienestar integral, con una presencia femenina y profesional.",
    items: [
      {
        title: "Ritmo pausado",
        description: "La navegación y la composición visual favorecen una lectura tranquila y sin ruido.",
      },
      {
        title: "Contraste preciso",
        description: "El azul profundo organiza la jerarquía y el fucsia aparece solo donde debe acentuar.",
      },
      {
        title: "Preparada para crecer",
        description: "La base queda lista para incorporar reservas, testimonios, galería real y nuevos servicios.",
      },
    ],
  },
  gallery: {
    id: "galeria",
    eyebrow: "Lenguaje visual",
    title: "Tres aplicaciones de marca que construyen presencia sin recargar",
    description:
      "Mientras se incorporan fotografías reales del centro, estas piezas ayudan a presentar el universo visual de Montenegro con una composición limpia y coherente.",
    items: [
      {
        src: "/assets/mockup-1.webp",
        alt: "Aplicación del logotipo Montenegro en un letrero exterior",
        caption: "Señalética exterior",
        note: "Visibilidad elegante y lectura clara en un contexto arquitectónico sobrio.",
      },
      {
        src: "/assets/mockup-2.webp",
        alt: "Aplicación del logotipo Montenegro sobre una superficie de vidrio",
        caption: "Aplicación en vidrio",
        note: "Una presencia ligera y refinada que se integra con naturalidad al entorno.",
      },
      {
        src: "/assets/mockup-3.webp",
        alt: "Aplicación del logotipo Montenegro sobre papel texturizado",
        caption: "Acabado editorial",
        note: "La marca también funciona desde la textura y el detalle en soportes impresos.",
      },
    ],
  },
  cta: {
    eyebrow: "Agenda",
    title: "Descubre una experiencia creada para resaltar tu bienestar",
    description:
      "La landing está preparada para conectar WhatsApp, formulario o sistema de reservas cuando se confirmen los datos finales del negocio.",
    primaryAction: {
      label: "Solicitar información",
      href: "#contacto",
    },
    secondaryAction: {
      label: "Volver al inicio",
      href: "#inicio",
    },
  },
  contact: {
    id: "contacto",
    eyebrow: "Contacto",
    title: "Datos listos para reemplazar por la información final",
    description:
      "Toda la información editable está centralizada para que puedas publicar rápido y después actualizar WhatsApp, dirección, horarios o redes sin rehacer la interfaz.",
    details: [
      {
        label: "WhatsApp",
        value: "Pendiente por confirmar",
        note: "Actualizar enlace y número final en el contenido del sitio.",
      },
      {
        label: "Dirección",
        value: "Pendiente por confirmar",
        note: "Definir sede o punto de atención definitivo.",
      },
      {
        label: "Horario",
        value: "Pendiente por confirmar",
        note: "Agregar disponibilidad real antes de publicar.",
      },
      {
        label: "Instagram",
        value: "Pendiente por confirmar",
        note: "Conectar perfil oficial cuando exista o sea aprobado.",
      },
    ],
    panelTitle: "Bloque preparado para conectar formulario o canal directo",
    panelDescription:
      "Este espacio puede enlazarse más adelante a WhatsApp, correo o una herramienta de reservas. Por ahora queda definido visualmente para no romper el recorrido de la página.",
    panelFields: ["Nombre completo", "Teléfono o WhatsApp", "Mensaje"],
    panelAction: "Canal de envío por definir",
  },
  footer: {
    note: "Landing inicial alineada al manual de marca, con estructura lista para crecer.",
    copyright: "Montenegro Salud y Belleza",
  },
};

