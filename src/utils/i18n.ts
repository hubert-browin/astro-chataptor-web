import {
  defaultLocale,
  localeHrefLang,
  locales,
  type Locale,
} from '../i18n/config';

const baseUrl = (import.meta.env.SITE || 'https://chataptor.com').replace(/\/+$/, '');

export interface AlternateUrl {
  lang: Locale;
  url: string;
  hreflang?: string;
}

export function ensureTrailingSlash(url: string): string {
  const parsed = new URL(url, baseUrl);

  if (parsed.pathname !== '/' && !parsed.pathname.endsWith('/')) {
    parsed.pathname = `${parsed.pathname}/`;
  }

  return parsed.toString();
}

export function getLocalizedPath(lang: Locale, slug: string): string {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
  return `/${lang}/${cleanSlug ? `${cleanSlug}/` : ''}`;
}

export function getLocalizedUrl(lang: Locale, slug: string): string {
  return ensureTrailingSlash(`${baseUrl}${getLocalizedPath(lang, slug)}`);
}

export function getAlternateUrls(slug: string): AlternateUrl[] {
  return locales.map((lang) => ({
    lang,
    hreflang: localeHrefLang[lang],
    url: getLocalizedUrl(lang, slug),
  }));
}

export function getCanonicalUrl(lang: Locale, slug: string): string {
  return getLocalizedUrl(lang, slug);
}

export function getXDefaultUrl(slug = ''): string {
  return getLocalizedUrl(defaultLocale, slug);
}
