// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { redirects } from "./src/config/redirects.mjs";

export default defineConfig({
  site: "https://chataptor.com",
  integrations: [],
  trailingSlash: "always",
  redirects,
  i18n: {
    defaultLocale: "en",
    locales: ["pl", "en", "de", "fr", "es", "it", "cs", "sk"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
