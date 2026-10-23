import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://www.fakohaus.kr',
  // 상담 완료 안내 페이지는 검색 결과에 노출될 이유가 없다
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/thanks') })],
  build: {
    inlineStylesheets: 'auto',
  },
});
