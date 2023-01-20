import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://eriandev.github.io',
  base: '/interactive-card-details-form',
  integrations: [tailwind()],
});
