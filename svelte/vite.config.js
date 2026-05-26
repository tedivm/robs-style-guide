import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  base: '/svelte/style/',
  build: {
    outDir: '../docs/svelte/style',
    emptyOutDir: true
  }
});
