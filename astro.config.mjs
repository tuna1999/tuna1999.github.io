import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tuna1999.github.io',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
