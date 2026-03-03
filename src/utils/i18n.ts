import { locales, type Locale } from '../i18n/config';

const baseUrl = (import.meta.env.SITE || 'https://chataptor.com').replace(/\/+$/, '');

export interface AlternateUrl {
  lang: Locale;
  url: string;
}

export function getAlternateUrls(slug: string): AlternateUrl[] {
  // Usuwamy opcjonalny początkowy slash w slugu
  const cleanSlug = slug.replace(/^\/+/, '');
  
  return locales.map((lang) => ({
    lang,
    url: `${baseUrl}/${lang}${cleanSlug ? `/${cleanSlug}` : ''}`,
  }));
}

export function getCanonicalUrl(lang: Locale, slug: string): string {
  const cleanSlug = slug.replace(/^\/+/, '');
  return `${baseUrl}/${lang}${cleanSlug ? `/${cleanSlug}` : ''}`;
}