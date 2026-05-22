// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://joanybuclon.com',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always',
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'PP Migra',
      cssVariable: '--font-migra',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            weight: 800,
            style: 'italic',
            src: ['./src/assets/fonts/MigraItalic-ExtraboldItalic.woff2'],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'PP Neue Montreal',
      cssVariable: '--font-neue-montreal',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/PPNeueMontreal-Regular.woff2'],
          },
        ],
      },
    },
  ],

  integrations: [sitemap()],
});
