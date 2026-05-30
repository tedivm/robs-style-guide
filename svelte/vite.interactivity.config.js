import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'rename-interactivity-output',
      closeBundle() {
        const outDir = path.resolve(__dirname, '../docs/svelte/interactivity');
        const oldPath = path.join(outDir, 'interactivity.index.html');
        const newPath = path.join(outDir, 'index.html');
        try {
          if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
          }
        } catch (e) {
          console.error('Failed to rename interactivity output:', e.message);
        }
      }
    }
  ],
  base: '/svelte/interactivity/',
  build: {
    outDir: '../docs/svelte/interactivity',
    emptyOutDir: true,
    rollupOptions: {
      input: './interactivity.index.html'
    }
  }
});
