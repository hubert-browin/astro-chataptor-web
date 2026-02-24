import type { Locale } from './config';

export interface AboutTranslations {
  title: string;
  description: string;
}

export const about: Record<Locale, AboutTranslations> = {
  pl: {
    title: 'O nas',
    description: 'Strona w budowie.',
  },
  en: {
    title: 'About us',
    description: 'Page under construction.',
  },
  de: {
    title: 'Über uns',
    description: 'Seite im Aufbau.',
  },
  fr: {
    title: 'À propos',
    description: 'Page en construction.',
  },
  es: {
    title: 'Sobre nosotros',
    description: 'Página en construcción.',
  },
  it: {
    title: 'Chi siamo',
    description: 'Pagina in costruzione.',
  },
  cs: {
    title: 'O nás',
    description: 'Stránka ve výstavbě.',
  },
  sk: {
    title: 'O nás',
    description: 'Stránka vo výstavbe.',
  },
};

export function getAboutTranslations(lang: Locale): AboutTranslations {
  return about[lang] || about.en;
}
