// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // base: '/'
  site: 'https://agfont.github.io',
  integrations: [sitemap()]
});