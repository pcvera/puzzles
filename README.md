# Puzzles Monorepo

A monorepo managed with pnpm and Turbo.

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

Install dependencies:

```bash
pnpm install
```

### Available Scripts

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Run dev mode for all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm test` - Run tests for all packages and apps
- `pnpm clean` - Clean build artifacts

### Project Structure

```
.
├── apps/          # Applications
├── packages/       # Shared packages
├── package.json    # Root package.json
├── pnpm-workspace.yaml
└── turbo.json      # Turbo configuration
```

## Adding a New Package

1. Create a new directory in `packages/`
2. Add a `package.json` file with appropriate scripts (build, dev, lint, test, clean)
3. Run `pnpm install` from the root to link dependencies

## Adding a New App

1. Create a new directory in `apps/`
2. Add a `package.json` file with appropriate scripts (build, dev, lint, test, clean)
3. Run `pnpm install` from the root to link dependencies

## Turbo Features

This monorepo uses Turbo for:
- **Smart caching** - Turbo caches task outputs and can detect when outputs haven't changed
- **Incremental builds** - Only rebuild what changed based on file changes
- **Task dependencies** - Automatically handles build order based on package dependencies
- **Parallel execution** - Runs tasks in parallel when possible for faster builds
