import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'rename-icons-output',
      closeBundle() {
        const outDir = path.resolve(__dirname, '../docs/svelte/icons');
        const oldPath = path.join(outDir, 'icons.index.html');
        const newPath = path.join(outDir, 'index.html');
        try {
          if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
          }
        } catch (e) {
          console.error('Failed to rename icons output:', e.message);
        }
      }
    }
  ],
  base: '/svelte/icons/',
  build: {
    outDir: '../docs/svelte/icons',
    emptyOutDir: true,
    rollupOptions: {
      input: './icons.index.html'
    }
  }
});
