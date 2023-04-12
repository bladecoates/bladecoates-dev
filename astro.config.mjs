import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  site: 'https://bladecoates.dev',
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
  }
});