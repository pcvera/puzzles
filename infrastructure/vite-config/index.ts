import { type UserConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';

/**
 * Base Vite configuration that can be extended by packages and apps.
 * Returns a plain configuration object that should be wrapped with defineConfig
 * by the consuming package.
 * 
 * @param overrides - Configuration overrides to merge with the base config
 * @returns A plain Vite configuration object
 */
export function createViteConfig(overrides?: UserConfig): UserConfig {
  return {
    build: {
      sourcemap: true,
      outDir: 'dist',
    },
    ...overrides,
  };
}

/**
 * Creates a Vite configuration optimized for library builds.
 * Accepts native Vite UserConfig and applies sensible defaults for library builds:
 * - ES module format
 * - TypeScript declaration file generation (if build.lib is present)
 * 
 * Returns a plain configuration object that should be wrapped with defineConfig
 * by the consuming package.
 * 
 * @param config - Native Vite configuration object
 * @returns A plain Vite configuration object with library defaults applied
 */
export function createLibraryConfig(config: UserConfig): UserConfig {
  const libConfig = config.build?.lib;
  const isLibraryBuild = libConfig !== undefined && libConfig !== false && typeof libConfig === 'object';
  
  // Apply library-specific defaults
  const libraryDefaults: UserConfig = {};
  
  if (isLibraryBuild && config.build) {
    // Ensure ES module format if not specified
    if (!libConfig.formats) {
      libraryDefaults.build = {
        ...config.build,
        lib: {
          ...libConfig,
          formats: ['es'],
        },
      };
    }
    
    // Add dts plugin if build.lib exists, plugins is not explicitly provided, 
    // and no dts plugin is already present
    if (config.plugins === undefined) {
      // No plugins provided, add dts by default
      const dtsPlugin = dts({
        insertTypesEntry: true,
      });
      libraryDefaults.plugins = [dtsPlugin];
    } else {
      // Plugins were explicitly provided, check if dts already exists
      const hasDtsPlugin = config.plugins.some(
        (plugin) => {
          if (!plugin) return false;
          if (Array.isArray(plugin)) {
            return plugin[0] && typeof plugin[0] === 'object' && 'name' in plugin[0] && plugin[0].name === 'vite-plugin-dts';
          }
          return typeof plugin === 'object' && 'name' in plugin && plugin.name === 'vite-plugin-dts';
        }
      );
      
      // Only add dts if it doesn't already exist
      if (!hasDtsPlugin) {
        const dtsPlugin = dts({
          insertTypesEntry: true,
        });
        libraryDefaults.plugins = [dtsPlugin, ...config.plugins];
      }
    }
  }
  
  return createViteConfig({
    ...config,
    ...libraryDefaults,
    // Deep merge build config
    build: {
      ...config.build,
      ...libraryDefaults.build,
      lib: libraryDefaults.build?.lib || config.build?.lib,
    },
    // Plugins are already merged above
    plugins: libraryDefaults.plugins || config.plugins,
  });
}
