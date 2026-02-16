import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SampleApp',
      formats: ['es'],
      fileName: () => 'main.js',
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['@puzzles/sample-package'],
    },
  },
});
