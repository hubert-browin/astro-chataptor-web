import { locales, type Locale } from '../i18n/config';

const baseUrl = 'https://chataptor.com';

export interface AlternateUrl {
  lang: Locale;
  url: string;
}

export function getAlternateUrls(slug: string): AlternateUrl[] {
  return locales.map((lang) => ({
    lang,
    url: `${baseUrl}/${lang}/${slug}`.replace(/\/+$/, ''),
  }));
}

export function getCanonicalUrl(lang: Locale, slug: string): string {
  return `${baseUrl}/${lang}/${slug}`.replace(/\/+$/, '');
}
