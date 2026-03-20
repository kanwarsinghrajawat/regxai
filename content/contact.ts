import type { Locale } from "../app/components/LanguageProvider";

export const contactHeroTitle: Record<Locale, string> = {
  en: "Get in Touch",
  de: "Kontaktieren Sie uns",
  fr: "Contactez-nous",
  es: "Contáctenos",
};

export const contactHeroDescription: Record<Locale, string> = {
  en: "We are here to help. Reach out to learn more about how regX AI can transform your organization.",
  de: "Wir sind für Sie da. Kontaktieren Sie uns, um mehr darüber zu erfahren, wie regX AI Ihre Organisation transformieren kann.",
  fr: "Nous sommes là pour vous aider. Contactez-nous pour en savoir plus sur la façon dont regX AI peut transformer votre organisation.",
  es: "Estamos aquí para ayudarle. Contáctenos para saber más sobre cómo regX AI puede transformar su organización.",
};

export const contactFormLabels: Record<Locale, {
  name: string;
  email: string;
  company: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder: string;
  messagePlaceholder: string;
  sending: string;
  sendMessage: string;
}> = {
  en: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    companyPlaceholder: "Your company",
    messagePlaceholder: "How can we help you?",
    sending: "Sending...",
    sendMessage: "Send Message",
  },
  de: {
    name: "Name",
    email: "E-Mail",
    company: "Unternehmen",
    message: "Nachricht",
    namePlaceholder: "Ihr Name",
    emailPlaceholder: "ihre@email.com",
    companyPlaceholder: "Ihr Unternehmen",
    messagePlaceholder: "Wie können wir Ihnen helfen?",
    sending: "Wird gesendet...",
    sendMessage: "Nachricht senden",
  },
  fr: {
    name: "Nom",
    email: "E-mail",
    company: "Entreprise",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre@email.com",
    companyPlaceholder: "Votre entreprise",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    sending: "Envoi en cours...",
    sendMessage: "Envoyer le message",
  },
  es: {
    name: "Nombre",
    email: "Correo electrónico",
    company: "Empresa",
    message: "Mensaje",
    namePlaceholder: "Su nombre",
    emailPlaceholder: "su@email.com",
    companyPlaceholder: "Su empresa",
    messagePlaceholder: "¿Cómo podemos ayudarle?",
    sending: "Enviando...",
    sendMessage: "Enviar mensaje",
  },
};

export const contactInfoTitle: Record<Locale, string> = {
  en: "Contact Information",
  de: "Kontaktinformationen",
  fr: "Coordonnées",
  es: "Información de contacto",
};

export const contactEmailLabel: Record<Locale, string> = {
  en: "Email",
  de: "E-Mail",
  fr: "E-mail",
  es: "Correo electrónico",
};

export const contactResponseTime: Record<Locale, string> = {
  en: "We typically respond within 24 hours.",
  de: "Wir antworten in der Regel innerhalb von 24 Stunden.",
  fr: "Nous répondons généralement dans les 24 heures.",
  es: "Normalmente respondemos en un plazo de 24 horas.",
};

export const contactEmailUs: Record<Locale, string> = {
  en: "Email us",
  de: "E-Mail senden",
  fr: "Envoyez-nous un e-mail",
  es: "Envíenos un correo",
};

export const contactScheduleTitle: Record<Locale, string> = {
  en: "Want to enforce deterministic decisioning? Schedule a call with us",
  de: "Möchten Sie deterministische Entscheidungsfindung durchsetzen? Vereinbaren Sie einen Anruf mit uns",
  fr: "Vous souhaitez appliquer une prise de décision déterministe ? Planifiez un appel avec nous",
  es: "¿Desea implementar la toma de decisiones determinista? Programe una llamada con nosotros",
};

export const contactScheduleButton: Record<Locale, string> = {
  en: "Schedule your call",
  de: "Termin vereinbaren",
  fr: "Planifier votre appel",
  es: "Programe su llamada",
};

export const contactFollowUs: Record<Locale, string> = {
  en: "Follow Us",
  de: "Folgen Sie uns",
  fr: "Suivez-nous",
  es: "Síganos",
};
