import { resolve } from 'path';
import { createViteConfig } from '@pcvera-puzzles/vite-config';

export default createViteConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SampleApp',
      formats: ['es'],
      fileName: () => 'main.js',
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['@pcvera-puzzles/sample-package'],
    },
  },
});
