import type { Preview } from '@storybook/html-vite'

// Import all hexagonal grid CSS files from dist (pre-built)
// Make sure to run `pnpm build` first to generate the dist files
import '../dist/hexagon.css';
import '../dist/offset-grid.css';
import '../dist/axial-grid.css';
import '../dist/cube-grid.css';
import '../dist/doubled-grid.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;