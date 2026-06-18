import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { renderLlmsFullTxt } from "../utils/ai-content";

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");

  return new Response(renderLlmsFullTxt(posts), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
