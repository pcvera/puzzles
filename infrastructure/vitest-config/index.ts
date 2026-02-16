import { type UserConfig } from 'vitest/config';

/**
 * Base Vitest configuration that can be merged with Vite config.
 * Returns a test configuration object that should be merged into a Vite config
 * and wrapped with defineConfig by the consuming package.
 * 
 * @param overrides - Test configuration overrides to merge with the base config
 * @returns A Vitest test configuration object
 */
export function createVitestConfig(overrides?: UserConfig['test']): UserConfig['test'] {
  return {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.config.*',
        '**/*.d.ts',
        '**/coverage/**',
      ],
    },
    ...overrides,
  };
}
