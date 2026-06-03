import { locales, type Locale } from '../i18n/config';

const baseUrl = (import.meta.env.SITE || 'https://chataptor.com').replace(/\/+$/, '');

export interface AlternateUrl {
  lang: Locale;
  hreflang: string;
  url: string;
}

export const localeHreflang: Record<Locale, string> = {
  en: 'en',
  pl: 'pl',
  de: 'de',
  fr: 'fr',
  es: 'es',
  it: 'it',
  cs: 'cs',
  sk: 'sk',
};

type BlogLike = {
  slug: string;
  data: {
    lang: Locale;
    translationKey?: string;
    sourceFile?: string;
    publishedAt?: Date;
    image?: string;
  };
};

function cleanSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, '');
}

function withTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}

export function getLocalizedPath(lang: Locale, slug: string): string {
  const normalizedSlug = cleanSlug(slug);
  return withTrailingSlash(`/${lang}${normalizedSlug ? `/${normalizedSlug}` : ''}`);
}

export function getAlternateUrls(slug: string): AlternateUrl[] {
  return locales.map((lang) => ({
    lang,
    hreflang: localeHreflang[lang],
    url: `${baseUrl}${getLocalizedPath(lang, slug)}`,
  }));
}

export function getCanonicalUrl(lang: Locale, slug: string): string {
  return `${baseUrl}${getLocalizedPath(lang, slug)}`;
}

export function getBlogEntrySlug(fullSlug: string, lang: Locale): string {
  const prefix = `${lang}/`;
  return fullSlug.startsWith(prefix) ? fullSlug.slice(prefix.length) : fullSlug;
}

export function getBlogTranslationKey(post: BlogLike): string {
  if (post.data.translationKey) return post.data.translationKey;
  if (post.data.sourceFile) return post.data.sourceFile.replace(/^\/+|\/+$/g, '');

  const date = post.data.publishedAt?.toISOString().slice(0, 10) || 'undated';
  return `${date}:${post.data.image || post.slug}`;
}

export function getBlogPostCanonicalUrl(post: BlogLike): string {
  return getCanonicalUrl(post.data.lang, `blog/${getBlogEntrySlug(post.slug, post.data.lang)}`);
}

export function getBlogPostAlternateUrls(post: BlogLike, allPosts: BlogLike[]): AlternateUrl[] {
  const translationKey = getBlogTranslationKey(post);

  return locales
    .map((lang) => {
      const localizedPost = allPosts.find(
        (candidate) =>
          candidate.data.lang === lang &&
          getBlogTranslationKey(candidate) === translationKey,
      );

      if (!localizedPost) return undefined;

      return {
        lang,
        hreflang: localeHreflang[lang],
        url: getBlogPostCanonicalUrl(localizedPost),
      };
    })
    .filter((alternate): alternate is AlternateUrl => Boolean(alternate));
}
