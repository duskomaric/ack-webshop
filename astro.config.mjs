import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://ackrila.com',
  integrations: [alpine(), tailwind(), sitemap()],
  output: 'server'
});