export interface NavItem {
  label: string;
  href: string;
}

export interface LinkAction {
  label: string;
  href: string;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  itemsTitle: string;
  items: string[];
  benefitsTitle: string;
  benefits: string[];
  note: string;
}

export interface SpotlightItem {
  title: string;
  description: string;
  items: string[];
  note: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  note: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    logo: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    accent: string;
    title: string;
    description: string;
    primaryAction: LinkAction;
    secondaryAction: LinkAction;
    highlights: string[];
    backgroundImage: string;
  };
  intro: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    highlights: HighlightItem[];
  };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  experience: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: HighlightItem[];
  };
  gallery: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: SpotlightItem[];
  };
  faq: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: LinkAction;
    secondaryAction: LinkAction;
  };
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    details: ContactDetail[];
    panelTitle: string;
    panelDescription: string;
    panelSteps: string[];
    panelNote: string;
  };
  footer: {
    note: string;
    copyright: string;
  };
}
