import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { renderMarkdownIndex } from "../../utils/ai-content";

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");

  return new Response(renderMarkdownIndex(posts), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
