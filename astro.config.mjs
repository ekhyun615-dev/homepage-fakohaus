import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://www.fakohaus.kr',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
