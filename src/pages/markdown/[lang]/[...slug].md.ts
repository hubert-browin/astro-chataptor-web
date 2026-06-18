import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locales, type Locale } from "../../../i18n/config";
import {
  aiStaticSlugs,
  type AiStaticSlug,
  type BlogPost,
  renderBlogPostMarkdown,
  renderStaticPageMarkdown,
} from "../../../utils/ai-content";
import { getBlogEntrySlug } from "../../../utils/i18n";

export const prerender = true;

type StaticMarkdownProps = {
  kind: "static";
  lang: Locale;
  slug: AiStaticSlug;
};

type BlogMarkdownProps = {
  kind: "blog";
  post: BlogPost;
};

type MarkdownProps = StaticMarkdownProps | BlogMarkdownProps;

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  const staticPaths = locales.flatMap((lang) =>
    aiStaticSlugs.map((slug) => ({
      params: {
        lang,
        slug: slug || "index",
      },
      props: {
        kind: "static",
        lang,
        slug,
      } satisfies StaticMarkdownProps,
    })),
  );

  const blogPaths = posts.map((post) => {
    const lang = post.data.lang;
    const slug = `blog/${getBlogEntrySlug(post.slug, lang)}`;

    return {
      params: {
        lang,
        slug,
      },
      props: {
        kind: "blog",
        post,
      } satisfies BlogMarkdownProps,
    };
  });

  return [...staticPaths, ...blogPaths];
}

export const GET: APIRoute<MarkdownProps> = async ({ props }) => {
  const posts = await getCollection("blog");
  const markdown =
    props.kind === "blog"
      ? renderBlogPostMarkdown(props.post, posts)
      : renderStaticPageMarkdown(props.lang, props.slug, posts);

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
