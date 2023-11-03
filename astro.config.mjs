import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  site: "https://gsmseal.com",
  integrations: [tailwind(), sitemap(), robotsTxt()],
});
