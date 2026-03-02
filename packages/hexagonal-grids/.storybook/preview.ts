import type { Preview } from '@storybook/html-vite'

// Import all hexagonal grid CSS files
// Note: These will be processed by PostCSS via Vite during Storybook development
import '../src/hexagon.css';
import '../src/offset-grid.css';
import '../src/axial-grid.css';
import '../src/cube-grid.css';
import '../src/doubled-grid.css';

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