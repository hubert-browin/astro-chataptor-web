// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import matter from 'gray-matter';

const site = 'https://chataptor.com';

const sitemapLocales = {
  en: 'en-US',
  pl: 'pl-PL',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  cs: 'cs-CZ',
  sk: 'sk-SK',
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogContentDir = path.join(__dirname, 'src', 'content', 'blog');
const authPathnames = new Set(['/login', '/register']);
const defaultLocale = 'en';
const defaultHrefLang = sitemapLocales[defaultLocale];

function ensureTrailingSlashUrl(url) {
  const parsed = new URL(url);

  if (parsed.pathname !== '/' && !parsed.pathname.endsWith('/')) {
    parsed.pathname = `${parsed.pathname}/`;
  }

  return parsed.toString();
}

function shouldIncludeInSitemap(page) {
  const pathname = new URL(page).pathname;
  return pathname !== '/' && !pathname.endsWith('/404') && !pathname.endsWith('/404/');
}

function collectMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectMarkdownFiles(entryPath);
    }

    return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
  });
}

function toIsoDate(value) {
  if (!value) {
    return undefined;
  }

  const date = value instanceof Date ? value : new Date(value);

  return Number.isNaN(date.valueOf()) ? undefined : date.toISOString();
}

function buildBlogSitemapData() {
  const groups = new Map();

  for (const filePath of collectMarkdownFiles(blogContentDir)) {
    const relativePath = path.relative(blogContentDir, filePath).replace(/\\/g, '/');
    const slugParts = relativePath.replace(/\.md$/, '').split('/');
    const langFromPath = slugParts[0];
    const localizedSlug = slugParts.slice(1).join('/');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    const lang = data.lang || langFromPath;
    const translationKey = data.translationKey;

    if (!translationKey || !localizedSlug || !sitemapLocales[lang]) {
      continue;
    }

    const entry = {
      lang,
      url: ensureTrailingSlashUrl(`${site}/${lang}/blog/${localizedSlug}`),
      lastmod: toIsoDate(data.updatedAt || data.publishedAt),
    };

    groups.set(translationKey, [...(groups.get(translationKey) || []), entry]);
  }

  const dataByUrl = new Map();

  for (const entries of groups.values()) {
    const defaultEntry = entries.find((entry) => entry.lang === defaultLocale);
    const links = entries
      .sort((a, b) => a.lang.localeCompare(b.lang))
      .map((entry) => ({
        lang: sitemapLocales[entry.lang],
        url: entry.url,
      }));

    if (defaultEntry) {
      links.push({
        lang: 'x-default',
        url: defaultEntry.url,
      });
    }

    for (const entry of entries) {
      dataByUrl.set(entry.url, {
        links,
        lastmod: entry.lastmod,
      });
    }
  }

  return dataByUrl;
}

const blogSitemapData = buildBlogSitemapData();

function normalizeSitemapLinks(links = []) {
  const seenLanguages = new Set();

  return links.reduce((normalizedLinks, link) => {
    const url = ensureTrailingSlashUrl(link.url);
    const language = link.hreflang || link.lang;

    if (url === `${site}/` || seenLanguages.has(language)) {
      return normalizedLinks;
    }

    seenLanguages.add(language);
    normalizedLinks.push({ ...link, url });
    return normalizedLinks;
  }, []);
}

function addXDefaultLink(links = []) {
  const normalizedLinks = normalizeSitemapLinks(links);

  if (normalizedLinks.some((link) => link.lang === 'x-default' || link.hreflang === 'x-default')) {
    return normalizedLinks;
  }

  const defaultLink = normalizedLinks.find(
    (link) => link.lang === defaultHrefLang || link.hreflang === defaultHrefLang,
  );

  if (!defaultLink) {
    return normalizedLinks;
  }

  return [
    ...normalizedLinks,
    {
      lang: 'x-default',
      url: defaultLink.url,
    },
  ];
}

export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: shouldIncludeInSitemap,
      customPages: [`${site}/login`, `${site}/register`],
      serialize(item) {
        const pathname = new URL(item.url).pathname;

        if (authPathnames.has(pathname)) {
          item.links = [];
          return item;
        }

        item.url = ensureTrailingSlashUrl(item.url);

        const blogData = blogSitemapData.get(item.url);

        if (blogData) {
          item.links = blogData.links;
          item.lastmod = blogData.lastmod;
          return item;
        }

        item.links = addXDefaultLink(item.links);

        return item;
      },
      i18n: {
        defaultLocale,
        locales: sitemapLocales,
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['pl', 'en', 'de', 'fr', 'es', 'it', 'cs', 'sk'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
