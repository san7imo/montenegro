import type { SiteConfig } from "../types/content";

export const siteContent: SiteConfig = {
  brand: {
    name: "Montenegro Salud y Belleza",
    shortName: "Montenegro",
    tagline: "Bienestar, belleza y cuidado en una experiencia pensada con serenidad.",
    logo: "/assets/LogoMontenegro.png",
    fullLogo: "/assets/logo-montenegro.png",
  },
  navigation: [
    { label: "Inicio", to: "/" },
    { label: "Servicios", to: "/servicios" },
    { label: "Contacto", to: "/contacto" },
  ],
  primaryAction: {
    label: "Agenda tu cita",
    to: "/contacto",
  },
  home: {
    hero: {
      eyebrow: "Montenegro Salud y Belleza",
      title: "Un espacio pensado para tu bienestar y tu belleza.",
      description:
        "En Montenegro Salud y Belleza, el cuidado personal se vive como una experiencia de armonía, atención cercana y calma. Cada detalle busca acompañarte con delicadeza, confianza y una sensación de bienestar real.",
      primaryAction: {
        label: "Ver servicios",
        to: "/servicios",
      },
      secondaryAction: {
        label: "Solicitar información",
        to: "/contacto",
      },
      supportingPoints: [
        "Atención cercana",
        "Ambiente sereno",
        "Experiencias pensadas para ti",
      ],
      visual: {
        src: "/assets/montenegro-portada-olga.jpg",
        alt: "Detalle del logotipo de Montenegro Salud y Belleza en la fachada del centro.",
        caption: "Montenegro Salud y Belleza",
      },
    },
    intro: {
      eyebrow: "Nuestra esencia",
      title: "Cuidar de ti también es regalarte una pausa.",
      description:
        "Montenegro nace para ofrecer una experiencia cálida y cuidada, donde bienestar, belleza y atención personalizada conviven en un mismo recorrido. La prioridad es que te sientas cómoda, tranquila y bien acompañada desde el primer contacto.",
      cards: [
        {
          title: "Atención personalizada",
          description:
            "Cada visita se plantea con cercanía, escucha y una mirada sensible a lo que necesitas.",
        },
        {
          title: "Un ambiente que invita a bajar el ritmo",
          description:
            "Cada espacio está pensado para transmitir calma, orden y una sensación de bienestar desde la llegada.",
        },
        {
          title: "Belleza que se siente natural",
          description:
            "La propuesta busca equilibrio, armonía y una sensación premium sin exceso ni saturación.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios destacados",
      title: "Una propuesta creada para acompañar distintas formas de cuidado.",
      description:
        "Descubre distintas líneas de cuidado pensadas para acompañarte con delicadeza, atención cercana y una experiencia serena.",
    },
    signature: {
      eyebrow: "Nuestra esencia",
      title: "Bienestar, detalle y serenidad en cada experiencia.",
      description:
        "Montenegro reúne una forma de cuidado delicada y cercana, donde cada detalle busca transmitir confianza, bienestar y una presencia tranquila.",
      visuals: [
        {
          src: "/assets/mockup-1.webp",
          alt: "Mockup del logotipo de Montenegro aplicado en una fachada.",
          caption: "Elegancia y presencia",
        },
        {
          src: "/assets/mockup-2.webp",
          alt: "Mockup del isotipo de Montenegro sobre vidrio con iluminación suave.",
          caption: "Calma y sutileza",
        },
        {
          src: "/assets/mockup-3.webp",
          alt: "Mockup del logotipo de Montenegro aplicado sobre una superficie clara.",
          caption: "Detalle y armonía",
        },
      ],
    },
    cta: {
      eyebrow: "Agenda tu visita",
      title: "Descubre una experiencia pensada para hacerte sentir bien.",
      description:
        "Si quieres conocer más sobre los servicios o resolver tus dudas, te invitamos a dar el siguiente paso y ponerte en contacto con Montenegro.",
      primaryAction: {
        label: "Explorar servicios",
        to: "/servicios",
      },
      secondaryAction: {
        label: "Ir a contacto",
        to: "/contacto",
      },
    },
  },
  servicesPage: {
    eyebrow: "Servicios Montenegro",
    title: "Encuentra la experiencia que quieres conocer con más detalle.",
    description:
      "Cada servicio se presenta con un enfoque claro y sereno para que puedas conocer mejor cada línea de cuidado y elegir la que más se ajusta a ti.",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Estamos aquí para ayudarte a dar el siguiente paso.",
    description:
      "Si deseas recibir información, agendar tu cita o resolver alguna duda, aquí encontrarás los canales principales para comunicarte con Montenegro.",
    channels: [
      {
        label: "WhatsApp",
        value: "Pendiente de confirmar",
        note: "Canal ideal para resolver dudas, recibir orientación y solicitar información.",
      },
      {
        label: "Teléfono",
        value: "Pendiente de confirmar",
        note: "Línea principal de atención para acompañarte en lo que necesites.",
      },
      {
        label: "Dirección",
        value: "Pendiente de confirmar",
        note: "Ubicación del centro para planear tu visita con tranquilidad.",
      },
      {
        label: "Horario",
        value: "Pendiente de confirmar",
        note: "Horario de atención para organizar tu cita con mayor comodidad.",
      },
    ],
    panelTitle: "Un contacto claro, cercano y pensado para acompañarte",
    panelDescription:
      "Queremos que comunicarte con Montenegro sea simple, cálido y directo, con información visible y una experiencia coherente con el resto del sitio.",
    panelItems: [
      "Canales de contacto principales visibles desde el primer momento",
      "Información presentada con claridad para facilitar tu decisión",
      "Accesos directos para conocer servicios o continuar la conversación",
    ],
    panelNote:
      "Si prefieres una atención más personalizada, puedes usar este espacio como punto de inicio para resolver dudas y recibir orientación.",
  },
  footer: {
    note: "Montenegro Salud y Belleza. Bienestar, belleza y cuidado con una presencia serena.",
    copyright: "Montenegro Salud y Belleza",
  },
};
