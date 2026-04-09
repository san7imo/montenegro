import type { SiteContent } from "../types/content";

export const siteContent: SiteContent = {
  brand: {
    name: "Montenegro Salud y Belleza",
    shortName: "Montenegro",
    tagline: "Salud, tecnología y belleza en un mismo centro.",
    logo: "/assets/logo-montenegro.png",
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Tecnología", href: "#tecnologia" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Valoración", href: "#valoracion" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Reserva", href: "#reserva" },
  ],
  hero: {
    eyebrow: "Clínica estética avanzada en Vitoria-Gasteiz",
    accent: "Montenegro Salud y Belleza",
    title: "Salud, tecnología y belleza en un mismo centro",
    description:
      "Montenegro Salud y Belleza combina tecnología estética de última generación, experiencia profesional y protocolos personalizados para lograr resultados visibles sin cirugía.",
    primaryAction: {
      label: "Reserva tu valoración",
      href: "#reserva",
    },
    secondaryAction: {
      label: "Ver tratamientos",
      href: "#tratamientos",
    },
    highlights: [
      "Sin compromiso",
      "Máxima confidencialidad",
      "Equipo sanitario especializado",
    ],
    backgroundImage: "/assets/montenegro-portada-olga.jpg",
  },
  intro: {
    id: "tecnologia",
    eyebrow: "Tecnología avanzada",
    title: "Resultados visibles y seguros desde una visión integral",
    description:
      "En Montenegro Salud y Belleza combinamos aparatología de última generación con una visión médica y estética integral para cuidar tu rostro, tu cuerpo y tu bienestar general.",
    highlights: [
      {
        title: "Enfoque médico-estético integral",
        description:
          "Tratamientos faciales, corporales, terapéuticos y de bienestar conectados entre sí para potenciar resultados y cuidar tu salud a largo plazo.",
      },
      {
        title: "Protocolos personalizados",
        description:
          "Valoración individual, seguimiento continuo y adaptación del tratamiento a tu piel, tu cuerpo, tu ritmo de vida y tus objetivos estéticos.",
      },
      {
        title: "Seguridad y confort en cada sesión",
        description:
          "Tecnologías no invasivas, espacios cuidados y un equipo experto que te acompaña en todo momento para que te sientas tranquila y segura.",
      },
    ],
  },
  services: {
    id: "tratamientos",
    eyebrow: "Tratamientos",
    title: "Facial, corporal, bienestar y recuperación en un solo recorrido",
    description:
      "Especialistas en estética facial avanzada, moldeamiento corporal sin cirugía, masajes terapéuticos y terapias de recuperación.",
    items: [
      {
        title: "Estética facial avanzada",
        description:
          "Tratamientos faciales diseñados para rejuvenecer, hidratar y mejorar la calidad de la piel con técnicas avanzadas y sin procedimientos invasivos.",
        itemsTitle: "Servicios faciales",
        items: [
          "Limpieza facial profunda",
          "Limpieza facial con ácido hialurónico",
          "Radiofrecuencia facial",
          "Lifting facial",
          "Bellaction Duo",
          "Exfoliación facial",
          "Cócteles revitalizantes",
        ],
        benefitsTitle: "Beneficios de la estética facial avanzada",
        benefits: [
          "Reducción de arrugas y líneas finas",
          "Mejora de la elasticidad y textura de la piel",
          "Estimulación profunda de colágeno",
          "Hidratación intensa y duradera",
          "Aumento de luminosidad y firmeza",
          "Rostro más descansado y uniforme",
        ],
        note:
          "Recomendado para personas que buscan un efecto rejuvenecedor visible, mejorar la calidad de la piel y prevenir el envejecimiento prematuro sin cirugías ni tiempos de baja.",
      },
      {
        title: "Moldeamiento corporal sin cirugía",
        description:
          "Tratamientos avanzados para reducir grasa localizada, remodelar la silueta y mejorar la firmeza corporal sin cirugía, sin cicatrices y sin tiempos de recuperación.",
        itemsTitle: "Tecnologías disponibles",
        items: [
          "Criolipólisis",
          "Liposucción sin cirugía",
          "Máquina moldeadora 4 en 1",
          "Gimnasia pasiva",
          "Presoterapia",
          "Maderoterapia",
          "Metaloterapia",
        ],
        benefitsTitle: "Beneficios del moldeamiento corporal",
        benefits: [
          "Reducción progresiva de grasa localizada",
          "Tonificación muscular y mejora del contorno",
          "Mejora notable de la circulación",
          "Resultados seguros, controlados y no invasivos",
          "Sin tiempos de recuperación ni baja laboral",
        ],
        note: "Zonas indicadas: abdomen, brazos, piernas, papada y glúteos.",
      },
      {
        title: "Masajes y bienestar",
        description:
          "Experiencias terapéuticas pensadas para aliviar la tensión muscular, mejorar la circulación y promover un estado de bienestar físico y emocional.",
        itemsTitle: "Servicios de masajes y spa",
        items: [
          "Masaje relajante",
          "Masaje linfático",
          "Drenaje linfático",
          "Masaje en pareja",
          "Baños medicinales",
          "Spa de manos y pies",
        ],
        benefitsTitle: "Beneficios para tu cuerpo y tu mente",
        benefits: [
          "Reducción de la inflamación y la retención de líquidos",
          "Eliminación de toxinas y mejora del sistema linfático",
          "Relajación profunda y mejora de la calidad del sueño",
          "Disminución del estrés, la ansiedad y la sobrecarga muscular",
          "Sensación de ligereza y bienestar general tras cada sesión",
        ],
        note:
          "Un espacio íntimo, tranquilo y cuidado donde desconectar del ritmo diario y reconectar contigo misma.",
      },
      {
        title: "Terapias especializadas",
        description:
          "Tratamientos orientados a la recuperación post-operatoria, post-parto y al bienestar íntimo femenino, con máxima discreción y acompañamiento profesional.",
        itemsTitle: "Tratamientos disponibles",
        items: [
          "Terapia post-operatoria",
          "Control de inflamación y hematomas",
          "Apoyo a la correcta cicatrización",
          "Terapia post-parto",
          "Rejuvenecimiento vaginal",
          "Tratamiento de várices y úlceras varicosas",
        ],
        benefitsTitle: "Enfoque del protocolo",
        benefits: [
          "Protocolos personalizados",
          "Acompañamiento profesional constante",
          "Resultados progresivos que priorizan tu salud y tu comodidad",
        ],
        note: "Bienestar íntimo femenino y recuperación con seguimiento cercano.",
      },
      {
        title: "Belleza integral",
        description:
          "Servicios complementarios para una experiencia estética completa en un solo espacio, cuidando cada detalle de tu imagen.",
        itemsTitle: "Servicios de belleza integral",
        items: [
          "Depilación láser",
          "Depilación con hilo",
          "Manicura y pedicura",
          "Cortes y peinados",
          "Cóctel anticaída capilar",
        ],
        benefitsTitle: "Cómo se integra en tu plan",
        benefits: [
          "Complementa los tratamientos faciales, corporales o terapéuticos",
          "Potencia los resultados con una experiencia estética completa",
          "Te ayuda a sentirte bien por dentro y por fuera",
        ],
        note: "Belleza integral en un mismo centro, con una atención coherente de principio a fin.",
      },
    ],
  },
  experience: {
    id: "centro",
    eyebrow: "Centro integral",
    title: "Montenegro Salud y Belleza, tu centro estético integral en Vitoria-Gasteiz",
    description:
      "Somos un centro de salud y belleza que combina tecnología avanzada, experiencia profesional y atención personalizada para ofrecerte resultados visibles sin procedimientos invasivos. Nuestro objetivo es claro: que cada visita se traduzca en un cambio positivo, medible y seguro en tu bienestar y en tu imagen.",
    items: [
      {
        title: "Tecnología y experiencia",
        description:
          "Aparatología estética de última generación y criterio profesional para trabajar cada caso con seriedad y precisión.",
      },
      {
        title: "Atención personalizada",
        description:
          "Cada tratamiento se adapta a tu punto de partida, a tus objetivos y al ritmo con el que quieres avanzar.",
      },
      {
        title: "Resultados visibles y seguros",
        description:
          "El recorrido prioriza tratamientos no invasivos, comodidad durante la sesión y mejoras progresivas con seguimiento.",
      },
    ],
  },
  gallery: {
    id: "valoracion",
    eyebrow: "Valoración personalizada",
    title: "La primera cita está pensada para entender tu caso con claridad",
    description:
      "Analizamos tu caso, definimos objetivos realistas y diseñamos un plan a medida con la tecnología más adecuada para lo que quieres trabajar.",
    items: [
      {
        title: "Qué revisamos contigo",
        description:
          "La valoración personalizada tiene como objetivo conocer tu caso, explicarte las opciones de tratamiento y resolver tus dudas.",
        items: [
          "Punto de partida facial, corporal o terapéutico",
          "Objetivos realistas y tiempos del proceso",
          "Opciones de tratamiento según tu caso",
        ],
        note: "Solo si estás de acuerdo pasamos a diseñar el plan y a programar las sesiones.",
      },
      {
        title: "Cómo trabajamos el plan",
        description:
          "Diseñamos contigo un recorrido adaptado a tus objetivos faciales, corporales o de recuperación, con transparencia y sin compromiso.",
        items: [
          "Protocolos personalizados",
          "Tecnología adecuada para cada necesidad",
          "Seguimiento continuo durante el proceso",
        ],
        note: "Tratamientos no invasivos, máxima discreción y acompañamiento constante.",
      },
      {
        title: "Qué puedes solicitar",
        description:
          "Puedes consultarnos por tratamientos faciales, corporales, masajes, terapias especializadas o belleza integral.",
        items: [
          "Reserva tu valoración",
          "Agenda tu cita",
          "Solicita información",
        ],
        note: "Respondemos habitualmente en menos de 24 horas laborables.",
      },
    ],
  },
  faq: {
    id: "preguntas",
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos las dudas más habituales antes de tu primera cita",
    description:
      "Estas son algunas de las preguntas que la web de referencia ya responde para facilitar la reserva y explicar cómo trabaja Montenegro Salud y Belleza.",
    items: [
      {
        question: "¿La valoración inicial tiene algún compromiso?",
        answer:
          "No. La valoración personalizada tiene como objetivo conocer tu caso, explicarte las opciones de tratamiento y resolver tus dudas. Solo si estás de acuerdo pasamos a diseñar el plan y a programar las sesiones.",
      },
      {
        question: "¿Los tratamientos son dolorosos o invasivos?",
        answer:
          "Trabajamos con tecnologías no invasivas y protocolos pensados para minimizar las molestias. Antes de cada tratamiento te explicamos qué vas a sentir y realizamos las pruebas necesarias para garantizar tu seguridad.",
      },
      {
        question: "¿En cuánto tiempo se ven los resultados?",
        answer:
          "Depende del tipo de tratamiento y del punto de partida. Muchos tratamientos faciales ofrecen resultados visibles desde la primera sesión, mientras que el moldeamiento corporal y las terapias especializadas se programan en ciclos para lograr mejoras progresivas y estables.",
      },
      {
        question: "¿Quién realiza los tratamientos?",
        answer:
          "Un equipo de profesionales especializados en estética avanzada, terapias corporales y recuperación, formados en el uso de aparatología estética y en protocolos de seguridad sanitaria.",
      },
    ],
  },
  cta: {
    eyebrow: "Reserva",
    title: "Reserva ahora tu valoración personalizada",
    description:
      "Diseñaremos contigo un plan de tratamiento adaptado a tus objetivos faciales, corporales o de recuperación, con total transparencia y sin compromiso.",
    primaryAction: {
      label: "Reserva tu valoración",
      href: "#reserva",
    },
    secondaryAction: {
      label: "Ver tratamientos",
      href: "#tratamientos",
    },
  },
  contact: {
    id: "reserva",
    eyebrow: "Reserva tu cita",
    title: "Cuéntanos qué tratamiento te interesa y organizamos tu visita",
    description:
      "Indícanos qué tipo de tratamiento te interesa, ya sea facial, corporal, masajes, terapias especializadas o belleza integral, y nos pondremos en contacto contigo para confirmar día y hora.",
    details: [
      {
        label: "Ubicación",
        value: "Vitoria-Gasteiz",
        note: "Centro estético integral con enfoque facial, corporal y terapéutico.",
      },
      {
        label: "Primera cita",
        value: "Valoración personalizada",
        note: "Sin compromiso, con objetivos claros y plan a medida.",
      },
      {
        label: "Tratamientos",
        value: "Facial, corporal, bienestar y recuperación",
        note: "Protocolos personalizados y tecnologías no invasivas.",
      },
      {
        label: "Tiempo de respuesta",
        value: "Menos de 24 horas laborables",
        note: "El equipo responde habitualmente dentro de ese plazo.",
      },
    ],
    panelTitle: "Qué puedes solicitar desde esta primera toma de contacto",
    panelDescription:
      "La petición inicial sirve para orientar tu caso, explicarte las alternativas disponibles y preparar una reserva más precisa desde el primer intercambio.",
    panelSteps: ["Reserva tu valoración", "Agenda tu cita", "Solicita información"],
    panelNote: "Respondemos habitualmente en menos de 24 horas laborables.",
  },
  footer: {
    note: "Clínica estética avanzada en Vitoria-Gasteiz.",
    copyright: "Montenegro Salud y Belleza",
  },
};
