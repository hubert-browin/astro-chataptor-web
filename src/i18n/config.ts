export const defaultLocale = 'en' as const;

export const locales = ['pl', 'en', 'de', 'fr', 'es', 'it', 'cs', 'sk'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  cs: 'Čeština',
  sk: 'Slovenčina',
};

export const localeHrefLang: Record<Locale, string> = {
  pl: 'pl-PL',
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  cs: 'cs-CZ',
  sk: 'sk-SK',
};

export const localeFlagSrc: Record<Locale, string> = {
  pl: '/images/flags/pl.svg',
  en: '/images/flags/gb.svg',
  de: '/images/flags/de.svg',
  fr: '/images/flags/fr.svg',
  es: '/images/flags/es.svg',
  it: '/images/flags/it.svg',
  cs: '/images/flags/cz.svg',
  sk: '/images/flags/sk.svg',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segment = path.split('/')[1];
  return isValidLocale(segment) ? segment : defaultLocale;
}
