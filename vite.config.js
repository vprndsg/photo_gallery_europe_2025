import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  // Use relative paths so the app works whether deployed to a subfolder or the
  // domain root (e.g. GitHub Pages project vs. user site)
  base: './'
});
