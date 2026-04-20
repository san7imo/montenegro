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

export interface SiteRouteItem {
  label: string;
  to: string;
}

export interface ActionTarget {
  label: string;
  to: string;
}

export interface ImageAsset {
  src?: string;
  alt: string;
  caption?: string;
}

export interface HomeFeatureCard {
  title: string;
  description: string;
}

export interface HomeHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ActionTarget;
  secondaryAction: ActionTarget;
  supportingPoints: string[];
  visual: ImageAsset;
}

export interface EditorialSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  cards: HomeFeatureCard[];
}

export interface SignatureSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  visuals: ImageAsset[];
}

export interface HomeCtaContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ActionTarget;
  secondaryAction: ActionTarget;
}

export interface HomePageContent {
  hero: HomeHeroContent;
  intro: EditorialSectionContent;
  services: {
    eyebrow: string;
    title: string;
    description: string;
  };
  signature: SignatureSectionContent;
  cta: HomeCtaContent;
}

export interface ServicesLandingContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  note: string;
  href?: string;
}

export interface ContactPageContent {
  eyebrow: string;
  title: string;
  description: string;
  channels: ContactChannel[];
  panelTitle: string;
  panelDescription: string;
  panelItems: string[];
  panelNote: string;
}

export interface ServicePageContent {
  slug: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  description: string;
  atmosphere: string;
  highlights: string[];
  benefitsTitle: string;
  benefits: string[];
  detailTitle: string;
  detailDescription: string;
  journeyTitle: string;
  journeySteps: string[];
  visual?: ImageAsset;
  cta: ActionTarget;
}

export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    logo: string;
    fullLogo: string;
  };
  navigation: SiteRouteItem[];
  primaryAction: ActionTarget;
  home: HomePageContent;
  servicesPage: ServicesLandingContent;
  contactPage: ContactPageContent;
  footer: {
    note: string;
    copyright: string;
  };
}
