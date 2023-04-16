import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */ {
    site: "https://bladecoates.dev",
    integrations: [
      mdx(),
      svelte(),
      tailwind({
        config: {
          applyBaseStyles: false,
        },
      }),
      sitemap(),
    ],
    vite: {
      plugins: [],
      resolve: {
        alias: {},
      },
      optimizeDeps: {
        allowNodeBuiltins: true,
      },
    },
    // output: "server",
    // adapter: node({
    //   mode: "middleware",
    // }),
  }
);
