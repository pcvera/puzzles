import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { createViteConfig } from '@pcvera-puzzles/vite-config';

export default createViteConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PuzzlesSamplePackage',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    rollupOptions: {
      external: [],
    },
  },
});
