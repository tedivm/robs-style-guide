import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
   base: '/svelte-built/',
   build: {
    outDir: '../svelte-built',
    emptyOutDir: true
  }
});
