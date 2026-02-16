import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createLibraryConfig } from '@pcvera-puzzles/vite-config';

export default defineConfig(
  createLibraryConfig({
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'SampleApp',
        fileName: () => 'main.js',
      },
      rollupOptions: {
        external: ['@pcvera-puzzles/sample-package'],
      },
    },
    // Opt out of dts plugin by providing an empty plugins array
    plugins: [],
  })
);
