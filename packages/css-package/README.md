# CSS Package

A simple CSS-only package that exports raw CSS files.

## Usage

```javascript
import '@pcvera-puzzles/css-package/styles.css';
```

## Build

```bash
pnpm build
```

This uses the shared PostCSS config from `@pcvera-puzzles/postcss-config` which includes:
- `postcss-import`: Resolves `@import` statements
- `autoprefixer`: Adds vendor prefixes

The build processes `src/styles.css` (which can use `@import` to combine other files) and outputs to `dist/styles.css`.
