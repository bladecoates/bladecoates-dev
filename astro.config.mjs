import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  site: "https://bladecoates.dev",
  trailingSlash: "never",
  integrations: [mdx(), svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap()],
  vite: {
    plugins: [],
    resolve: {
      alias: {}
    },
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'solarized-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
  },
  },
  // output: "server",
  // adapter: node({
  //  mode: "standalone"
  //})
});
