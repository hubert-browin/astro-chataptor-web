import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locales, type Locale } from "../i18n/config";
import {
  getAlternateUrls,
  getBlogPostAlternateUrls,
  getBlogPostCanonicalUrl,
  getCanonicalUrl,
} from "../utils/i18n";

export const prerender = true;

type SitemapAlternate = {
  hreflang: string;
  href: string;
};

type SitemapEntry = {
  loc: string;
  lastmod?: Date;
  alternates?: SitemapAlternate[];
};

const localizedStaticSlugs = [
  "",
  "about",
  "blog",
  "privacy",
  "terms",
  "integrations/wordpress",
  "integrations/shoper",
  "legal/shoper-terms",
  "legal/shoper-privacy",
];

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return char;
    }
  });
}

function formatLastmod(date?: Date): string | undefined {
  if (!date || Number.isNaN(date.valueOf())) return undefined;
  return date.toISOString();
}

function withXDefault(alternates: SitemapAlternate[]): SitemapAlternate[] {
  const englishAlternate = alternates.find(
    (alternate) => alternate.hreflang === "en",
  );
  if (!englishAlternate) return alternates;

  return [
    ...alternates,
    { hreflang: "x-default", href: englishAlternate.href },
  ];
}

function renderEntry(entry: SitemapEntry): string {
  const lastmod = formatLastmod(entry.lastmod);
  const alternateLines = entry.alternates
    ?.map(
      (alternate) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
    )
    .join("\n");

  return [
    "  <url>",
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : undefined,
    alternateLines,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

function uniqueEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();

  return entries.filter((entry) => {
    if (seen.has(entry.loc)) return false;
    seen.add(entry.loc);
    return true;
  });
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL("https://chataptor.com/");
  const posts = await getCollection("blog");

  const staticEntries = localizedStaticSlugs.flatMap((slug) => {
    const alternates = withXDefault(
      getAlternateUrls(slug).map((alternate) => ({
        hreflang: alternate.hreflang,
        href: alternate.url,
      })),
    );

    return locales.map((lang: Locale) => ({
      loc: getCanonicalUrl(lang, slug),
      alternates,
    }));
  });

  const blogEntries = posts.map((post) => {
    const alternates = withXDefault(
      getBlogPostAlternateUrls(post, posts).map((alternate) => ({
        hreflang: alternate.hreflang,
        href: alternate.url,
      })),
    );

    return {
      loc: getBlogPostCanonicalUrl(post),
      lastmod: post.data.updatedAt || post.data.publishedAt,
      alternates,
    };
  });

  const entries = uniqueEntries([...staticEntries, ...blogEntries]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderEntry).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
