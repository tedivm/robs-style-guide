import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  base: '/svelte/',
  build: {
    outDir: '../docs/svelte',
    emptyOutDir: true
  }
});
