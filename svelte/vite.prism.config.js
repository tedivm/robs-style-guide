import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'rename-prism-output',
      closeBundle() {
        const outDir = path.resolve(__dirname, '../docs/svelte-prism');
        const oldPath = path.join(outDir, 'prism.index.html');
        const newPath = path.join(outDir, 'index.html');
        try {
          if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
          }
        } catch (e) {
          console.error('Failed to rename prism output:', e.message);
        }
      }
    }
  ],
  base: '/svelte-prism/',
  build: {
    outDir: '../docs/svelte-prism',
    emptyOutDir: true,
    rollupOptions: {
      input: './prism.index.html'
    }
  }
});
