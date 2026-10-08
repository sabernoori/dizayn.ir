import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dizayn.ir",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 1,
    }),
  ],
});
