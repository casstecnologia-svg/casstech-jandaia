import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.casstechjandaia.com.br',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
