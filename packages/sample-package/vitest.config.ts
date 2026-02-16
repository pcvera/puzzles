import { defineConfig } from 'vite';
import { createVitestConfig } from '@pcvera-puzzles/vitest-config';

export default defineConfig({
  test: createVitestConfig(),
});
