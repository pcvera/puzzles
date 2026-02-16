import { defineConfig, type UserConfig } from 'vite';

/**
 * Base Vite configuration that can be extended by packages and apps.
 * 
 * @param overrides - Configuration overrides to merge with the base config
 * @returns A Vite configuration object
 */
export function createViteConfig(overrides?: UserConfig): UserConfig {
  return defineConfig({
    build: {
      sourcemap: true,
    },
    ...overrides,
  });
}

/**
 * Default base configuration export for convenience
 */
export default createViteConfig();
