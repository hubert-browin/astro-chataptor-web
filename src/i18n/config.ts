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

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segment = path.split('/')[1];
  return isValidLocale(segment) ? segment : defaultLocale;
}
