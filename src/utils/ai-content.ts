import type { CollectionEntry } from "astro:content";
import { getAbout } from "../i18n/about";
import { getBlogUI } from "../i18n/blog";
import { locales, localeNames, type Locale } from "../i18n/config";
import { getShoperIntegration } from "../i18n/integrations-shoper";
import { getWordPressIntegration } from "../i18n/integrations-wordpress";
import { landing } from "../i18n/landing";
import { getPrivacyTranslations } from "../i18n/privacy";
import { getShoperPrivacy } from "../i18n/shoper-privacy";
import { getShoperTerms } from "../i18n/shoper-terms";
import { getTerms } from "../i18n/terms";
import {
  getBlogEntrySlug,
  getBlogPostAlternateUrls,
  getBlogPostCanonicalUrl,
  getBlogPostMarkdownUrl,
  getCanonicalUrl,
  getMarkdownUrl,
} from "./i18n";

export type BlogPost = CollectionEntry<"blog">;

export const aiStaticSlugs = [
  "",
  "about",
  "blog",
  "integrations/wordpress",
  "integrations/shoper",
  "privacy",
  "terms",
  "legal/shoper-privacy",
  "legal/shoper-terms",
] as const;

export type AiStaticSlug = (typeof aiStaticSlugs)[number];

type StaticPageMeta = {
  title: string;
  description: string;
  slug: AiStaticSlug;
};

const siteUrl = "https://chataptor.com";

const coreFacts = [
  "Chataptor is a free customer communication tool with no message limits.",
  "Chataptor includes website live chat, a shared omnichannel inbox, mobile customer support, e-commerce and marketplace messaging, and automatic customer conversation translation.",
  "The product is designed for companies that want to answer customers from many channels and languages without adding a separate language team.",
  "Chataptor is especially relevant for live chat, customer support, e-commerce support, international sales, automatic translation, and messages in one place.",
];

function cleanText(value: unknown): string {
  if (value === null || value === undefined) return "";

  return String(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function joinText(...values: unknown[]): string {
  return values.map(cleanText).filter(Boolean).join(" ");
}

function compactLines(lines: Array<string | undefined | null | false>): string {
  return lines
    .map((line) => (typeof line === "string" ? line.trimEnd() : ""))
    .filter((line, index, all) => {
      if (line !== "") return true;
      return index > 0 && all[index - 1] !== "" && all[index + 1] !== "";
    })
    .join("\n")
    .trim();
}

function bullet(text: unknown): string {
  const cleaned = cleanText(text);
  return cleaned ? `- ${cleaned}` : "";
}

function formatDate(date?: Date): string {
  if (!date || Number.isNaN(date.valueOf())) return "";
  return date.toISOString().split("T")[0];
}

function absoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${siteUrl}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function findPostByCanonicalUrl(posts: BlogPost[], url: string): BlogPost | undefined {
  return posts.find((post) => getBlogPostCanonicalUrl(post) === url);
}

function absolutizeMarkdownLinks(markdown: string): string {
  return markdown
    .replace(/(!?\[[^\]]*\]\()\/([^)\s]+)\)/g, `$1${siteUrl}/$2)`)
    .replace(/(<img[^>]+src=["'])\/([^"']+)/g, `$1${siteUrl}/$2`);
}

function metadataBlock(meta: {
  title: string;
  description: string;
  lang: Locale;
  canonicalUrl: string;
  markdownUrl: string;
  publishedAt?: Date;
  updatedAt?: Date;
  author?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
}): string[] {
  return [
    `Canonical URL: ${meta.canonicalUrl}`,
    `Markdown URL: ${meta.markdownUrl}`,
    `Language: ${cleanText(localeNames[meta.lang])} (${meta.lang})`,
    meta.author ? `Author: ${cleanText(meta.author)}` : undefined,
    meta.publishedAt ? `Published: ${formatDate(meta.publishedAt)}` : undefined,
    meta.updatedAt ? `Updated: ${formatDate(meta.updatedAt)}` : undefined,
    meta.tags?.length ? `Tags: ${meta.tags.map(cleanText).join(", ")}` : undefined,
    meta.image ? `Image: ${absoluteUrl(meta.image)}` : undefined,
    meta.imageAlt ? `Image alt: ${cleanText(meta.imageAlt)}` : undefined,
    "",
    cleanText(meta.description),
  ];
}

export function getStaticPageMeta(lang: Locale, slug: AiStaticSlug): StaticPageMeta {
  if (slug === "") {
    const t = landing[lang] || landing.en;
    return {
      slug,
      title: cleanText(t.hero.pagetitle),
      description: cleanText(t.hero.description),
    };
  }

  if (slug === "about") {
    const t = getAbout(lang);
    return {
      slug,
      title: `${joinText(t.hero.title, t.hero.highlight)} - Chataptor`,
      description: cleanText(t.hero.subtitle),
    };
  }

  if (slug === "blog") {
    const t = getBlogUI(lang);
    return {
      slug,
      title: `${cleanText(t.hero.title)} - Chataptor`,
      description: cleanText(t.hero.subtitle),
    };
  }

  if (slug === "integrations/wordpress") {
    const t = getWordPressIntegration(lang);
    return {
      slug,
      title: cleanText(t.meta.title),
      description: cleanText(t.meta.description),
    };
  }

  if (slug === "integrations/shoper") {
    const t = getShoperIntegration(lang);
    return {
      slug,
      title: cleanText(t.meta.title),
      description: cleanText(t.meta.description),
    };
  }

  if (slug === "privacy") {
    const t = getPrivacyTranslations(lang);
    return {
      slug,
      title: cleanText(t.pageTitle),
      description: cleanText(t.metaDescription),
    };
  }

  if (slug === "terms") {
    const t = getTerms(lang);
    return {
      slug,
      title: `${cleanText(t.title)} - Chataptor`,
      description: cleanText(t.description),
    };
  }

  if (slug === "legal/shoper-privacy") {
    const t = getShoperPrivacy(lang);
    return {
      slug,
      title: cleanText(t.meta.title),
      description: cleanText(t.meta.description),
    };
  }

  const t = getShoperTerms(lang);
  return {
    slug,
    title: cleanText(t.meta.title),
    description: cleanText(t.meta.description),
  };
}

function renderHomeMarkdown(lang: Locale): string {
  const t = landing[lang] || landing.en;

  return compactLines([
    "## Product Summary",
    cleanText(t.hero.description),
    cleanText(t.hero.descriptionHighlight),
    "",
    "## Key Product Facts",
    ...coreFacts.map(bullet),
    "",
    "## Main Capabilities",
    bullet(t.productStory.liveChat.title + ": " + t.productStory.liveChat.description),
    bullet(t.productStory.inbox.title + ": " + t.productStory.inbox.description),
    bullet(t.productStory.translation.title + ": " + t.productStory.translation.description),
    bullet(t.productStory.mobile.title + ": " + t.productStory.mobile.description),
    "",
    "## Setup",
    bullet(t.implementation.step1.title + ": " + t.implementation.step1.description),
    bullet(t.implementation.step2.title + ": " + t.implementation.step2.description),
    bullet(t.implementation.step3.title + ": " + t.implementation.step3.description),
    bullet(t.implementation.step4.title + ": " + t.implementation.step4.description),
    "",
    "## Pricing",
    cleanText(t.pricing.subtitle),
    bullet(t.pricing.betaBanner.f1),
    bullet(t.pricing.betaBanner.f2),
    bullet(t.pricing.betaBanner.f3),
    bullet(t.pricing.betaBanner.f4),
  ]);
}

function renderAboutMarkdown(lang: Locale): string {
  const t = getAbout(lang);

  return compactLines([
    "## Story",
    cleanText(t.story.part1),
    cleanText(t.story.highlight),
    cleanText(t.story.part2),
    "",
    "## Problems Chataptor Solves",
    bullet(t.problems.p1.title + " " + t.problems.p1.desc),
    bullet(t.problems.p2.title + " " + t.problems.p2.desc),
    bullet(t.problems.p3.title + " " + t.problems.p3.desc),
    "",
    "## Solution",
    cleanText(`${t.solution.text} ${t.solution.highlight}`),
    "",
    "## Team",
    cleanText(t.team.title),
    cleanText(t.team.desc),
    bullet(`${t.team.hubert.role}: ${t.team.hubert.bio}`),
    bullet(`${t.team.marek.role}: ${t.team.marek.bio}`),
    "",
    "## Philosophy",
    cleanText(t.philosophy.title1),
    cleanText(t.philosophy.p1),
    cleanText(t.philosophy.p2),
    cleanText(t.philosophy.title2),
    cleanText(t.philosophy.p3),
    cleanText(t.philosophy.p4),
  ]);
}

function renderBlogIndexMarkdown(lang: Locale, posts: BlogPost[]): string {
  const t = getBlogUI(lang);
  const localizedPosts = posts
    .filter((post) => post.data.lang === lang && post.slug.startsWith(`${lang}/`))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return compactLines([
    "## Blog Overview",
    cleanText(t.hero.subtitle),
    "",
    "## Current Guides",
    ...localizedPosts.map((post) => {
      const slug = getBlogEntrySlug(post.slug, lang);
      return `- [${cleanText(post.data.title)}](${getCanonicalUrl(lang, `blog/${slug}`)}): ${cleanText(post.data.description)} Markdown: ${getMarkdownUrl(lang, `blog/${slug}`)}`;
    }),
  ]);
}

function renderIntegrationMarkdown(
  lang: Locale,
  platform: "wordpress" | "shoper",
): string {
  const t =
    platform === "wordpress"
      ? getWordPressIntegration(lang)
      : getShoperIntegration(lang);

  return compactLines([
    "## Overview",
    cleanText(`${t.hero.title} ${t.hero.titleAccent}`),
    cleanText(t.hero.subtitle),
    "",
    "## Key Features",
    ...t.features.items.map((item) => bullet(`${item.title}: ${item.description}`)),
    "",
    "## How It Works",
    ...t.howItWorks.steps.map((step) => bullet(`${step.title}: ${step.description}`)),
    "",
    "## Platform Fit",
    cleanText(t.woocommerce.title),
    cleanText(t.woocommerce.subtitle),
    ...t.woocommerce.items.map((item) => bullet(`${item.title}: ${item.description}`)),
    "",
    "## Technical Requirements",
    ...t.techRequirements.items.map((item) => bullet(`${item.label}: ${item.value}`)),
    "",
    "## FAQ",
    ...t.faq.items.flatMap((item) => [
      `### ${cleanText(item.question)}`,
      cleanText(item.answer),
      "",
    ]),
    "## Call To Action",
    cleanText(t.cta.title),
    cleanText(t.cta.subtitle),
  ]);
}

function renderLegalPointerMarkdown(lang: Locale, slug: AiStaticSlug): string {
  const meta = getStaticPageMeta(lang, slug);
  return compactLines([
    "## Authoritative Legal Page",
    cleanText(meta.description),
    "",
    "The canonical HTML page is the source of truth for this legal document.",
    `Canonical URL: ${getCanonicalUrl(lang, slug)}`,
  ]);
}

export function renderStaticPageMarkdown(
  lang: Locale,
  slug: AiStaticSlug,
  posts: BlogPost[],
): string {
  const meta = getStaticPageMeta(lang, slug);
  const canonicalUrl = getCanonicalUrl(lang, slug);
  const markdownUrl = getMarkdownUrl(lang, slug);

  let body = "";
  if (slug === "") body = renderHomeMarkdown(lang);
  else if (slug === "about") body = renderAboutMarkdown(lang);
  else if (slug === "blog") body = renderBlogIndexMarkdown(lang, posts);
  else if (slug === "integrations/wordpress") body = renderIntegrationMarkdown(lang, "wordpress");
  else if (slug === "integrations/shoper") body = renderIntegrationMarkdown(lang, "shoper");
  else body = renderLegalPointerMarkdown(lang, slug);

  return compactLines([
    `# ${cleanText(meta.title)}`,
    "",
    ...metadataBlock({
      title: meta.title,
      description: meta.description,
      lang,
      canonicalUrl,
      markdownUrl,
    }),
    "",
    body,
  ]);
}

export function renderBlogPostMarkdown(post: BlogPost, allPosts: BlogPost[]): string {
  const lang = post.data.lang;
  const canonicalUrl = getBlogPostCanonicalUrl(post);
  const markdownUrl = getBlogPostMarkdownUrl(post);
  const alternates = getBlogPostAlternateUrls(post, allPosts);
  const body = absolutizeMarkdownLinks(post.body || "");

  return compactLines([
    `# ${cleanText(post.data.title)}`,
    "",
    ...metadataBlock({
      title: post.data.title,
      description: post.data.description,
      lang,
      canonicalUrl,
      markdownUrl,
      publishedAt: post.data.publishedAt,
      updatedAt: post.data.updatedAt,
      author: post.data.author,
      tags: post.data.tags,
      image: post.data.image,
      imageAlt: post.data.imageAlt,
    }),
    "",
    alternates.length ? "## Language Versions" : undefined,
    ...alternates.map((alternate) => {
      const localizedPost = findPostByCanonicalUrl(allPosts, alternate.url);
      const localizedMarkdownUrl = localizedPost
        ? getBlogPostMarkdownUrl(localizedPost)
        : getMarkdownUrl(alternate.lang, "");

      return `- ${alternate.hreflang}: ${alternate.url} | Markdown: ${localizedMarkdownUrl}`;
    }),
    alternates.length ? "" : undefined,
    body,
  ]);
}

function sortedPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const langDelta = locales.indexOf(a.data.lang) - locales.indexOf(b.data.lang);
    if (langDelta !== 0) return langDelta;
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}

export function renderMarkdownIndex(posts: BlogPost[]): string {
  const staticLinks = locales.flatMap((lang) =>
    aiStaticSlugs.map((slug) => {
      const meta = getStaticPageMeta(lang, slug);
      return `- [${cleanText(meta.title)}](${getMarkdownUrl(lang, slug)}): ${cleanText(meta.description)}`;
    }),
  );

  const postLinks = sortedPosts(posts).map((post) => {
    const lang = post.data.lang;
    return `- [${cleanText(post.data.title)}](${getBlogPostMarkdownUrl(post)}): ${cleanText(post.data.description)}`;
  });

  return compactLines([
    "# Chataptor Markdown Index",
    "",
    "> AI-readable Markdown entry points for Chataptor public pages and blog posts.",
    "",
    "## Core Files",
    `- [llms.txt](${siteUrl}/llms.txt): curated AI index.`,
    `- [llms-full.txt](${siteUrl}/llms-full.txt): full AI-readable corpus.`,
    `- [XML sitemap index](${siteUrl}/sitemap-index.xml): canonical crawl discovery.`,
    "",
    "## Static Pages",
    ...staticLinks,
    "",
    "## Blog Posts",
    ...postLinks,
  ]);
}

export function renderLlmsTxt(posts: BlogPost[]): string {
  const englishPosts = sortedPosts(posts)
    .filter((post) => post.data.lang === "en")
    .slice(0, 14);

  const staticPageLines = locales.map((lang) => {
    const meta = getStaticPageMeta(lang, "");
    return `- [${cleanText(localeNames[lang])} home](${getCanonicalUrl(lang, "")}): ${cleanText(meta.description)} Markdown: ${getMarkdownUrl(lang, "")}`;
  });

  const blogLines = englishPosts.map((post) => {
    return `- [${cleanText(post.data.title)}](${getBlogPostCanonicalUrl(post)}): ${cleanText(post.data.description)} Markdown: ${getBlogPostMarkdownUrl(post)}`;
  });

  return compactLines([
    "# Chataptor",
    "",
    "> Chataptor is a free customer communication tool with no message limits: website live chat, shared omnichannel inbox, mobile support, e-commerce and marketplace messaging, and automatic translation of customer conversations.",
    "",
    "Use the canonical HTML URLs for citation and indexing. Use the Markdown URLs for AI-readable content extraction. The full Markdown corpus is available in one file at https://chataptor.com/llms-full.txt.",
    "",
    "## Product Facts",
    ...coreFacts.map(bullet),
    "",
    "## Core AI Files",
    `- [Full AI-readable corpus](${siteUrl}/llms-full.txt): complete Markdown version of key site pages and blog posts.`,
    `- [Markdown index](${siteUrl}/markdown/index.md): all generated Markdown page versions.`,
    `- [XML sitemap index](${siteUrl}/sitemap-index.xml): canonical public URL discovery with hreflang alternates.`,
    "",
    "## Localized Entry Points",
    ...staticPageLines,
    "",
    "## Main Product Pages",
    `- [English blog](${getCanonicalUrl("en", "blog")}): guides about free live chat, customer support, automatic translation, omnichannel inboxes, and e-commerce communication.`,
    `- [WordPress integration](${getCanonicalUrl("en", "integrations/wordpress")}): multilingual live chat for WordPress and WooCommerce.`,
    `- [Shoper integration](${getCanonicalUrl("en", "integrations/shoper")}): live chat and customer support for Shoper stores.`,
    `- [About Chataptor](${getCanonicalUrl("en", "about")}): product story, mission, and team context.`,
    "",
    "## Important Blog Guides",
    ...blogLines,
    "",
    "## Languages",
    "- Polish: pl",
    "- English: en",
    "- German: de",
    "- French: fr",
    "- Spanish: es",
    "- Italian: it",
    "- Czech: cs",
    "- Slovak: sk",
    "",
    "## Notes For AI Agents",
    "- Prefer canonical HTML URLs when citing sources.",
    "- Prefer Markdown URLs when extracting page content.",
    "- Use hreflang alternates from the HTML head or XML sitemap to connect translations.",
    "- Chataptor's current public positioning is free live chat and customer communication with no message limits.",
  ]);
}

export function renderLlmsFullTxt(posts: BlogPost[]): string {
  const staticPages = locales.flatMap((lang) =>
    aiStaticSlugs.map((slug) => renderStaticPageMarkdown(lang, slug, posts)),
  );

  const blogPages = sortedPosts(posts).map((post) =>
    renderBlogPostMarkdown(post, posts),
  );

  return compactLines([
    "# Chataptor - Full AI-Readable Website Corpus",
    "",
    "> Complete Markdown-oriented reference for Chataptor public website content. Use canonical HTML URLs for citations and Markdown URLs for extraction.",
    "",
    "## Global Product Facts",
    ...coreFacts.map(bullet),
    "",
    "## Discovery",
    `- Website: ${siteUrl}/`,
    `- llms.txt: ${siteUrl}/llms.txt`,
    `- Markdown index: ${siteUrl}/markdown/index.md`,
    `- XML sitemap index: ${siteUrl}/sitemap-index.xml`,
    "",
    "## Static Pages",
    ...staticPages.flatMap((page) => [page, ""]),
    "",
    "## Blog Posts",
    ...blogPages.flatMap((page) => [page, ""]),
  ]);
}
