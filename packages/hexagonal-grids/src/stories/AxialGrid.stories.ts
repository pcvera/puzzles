import type { Meta, StoryObj } from '@storybook/html-vite';

type AxialGridArgs = {
  orientation: 'pointy-top' | 'flat-top';
  gap: number;
  rowCount: number;
  colCount: number;
  xOffsetHexes: number;
  yOffsetHexes: number;
};

const meta = {
  title: 'Grid/Axial Grid',
  tags: ['autodocs'],
} satisfies Meta<AxialGridArgs>;

export default meta;
type Story = StoryObj<AxialGridArgs>;

function createHex(q: number, r: number) {
  const hex = document.createElement('div');
  hex.className = 'placed-hex hexagon-clip';
  hex.style.cssText = `
    --q: ${q};
    --r: ${r};
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
  `;
  hex.textContent = `${q},${r}`;
  return hex;
}

export const FlatTop: Story = {
  args: {
    orientation: 'flat-top',
    gap: 0,
    rowCount: 4,
    colCount: 5,
    xOffsetHexes: 0,
    yOffsetHexes: 0,
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['pointy-top', 'flat-top'],
      labels: {
        'pointy-top': 'Pointy Top',
        'flat-top': 'Flat Top',
      },
    },
    gap: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Gap between hexagons in pixels',
    },
    rowCount: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Number of rows (fractional supported)',
    },
    colCount: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Number of columns (fractional supported)',
    },
    xOffsetHexes: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      description: 'X offset in hexes (fractional supported)',
    },
    yOffsetHexes: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      description: 'Y offset in hexes (fractional supported)',
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    
    container.style.cssText = `
      --hex-size: 120px;
      --gap: ${args.gap ?? 0}px;
      --row-count: ${args.rowCount ?? 4};
      --col-count: ${args.colCount ?? 5};
      --x-offset-hexes: ${args.xOffsetHexes ?? 0};
      --y-offset-hexes: ${args.yOffsetHexes ?? 0};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `axial-grid ${args.orientation}`;

    // Create a fixed grid of hexagons (5x4) - width/height only affect container sizing
    for (let r = 0; r < 4; r++) {
      for (let q = 0; q < 5; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};

export const PointyTop: Story = {
  args: {
    orientation: 'pointy-top',
    gap: 0,
    rowCount: 4,
    colCount: 5,
    xOffsetHexes: 0,
    yOffsetHexes: 0,
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['pointy-top', 'flat-top'],
      labels: {
        'pointy-top': 'Pointy Top',
        'flat-top': 'Flat Top',
      },
    },
    gap: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Gap between hexagons in pixels',
    },
    rowCount: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Number of rows (fractional supported)',
    },
    colCount: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Number of columns (fractional supported)',
    },
    xOffsetHexes: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      description: 'X offset in hexes (fractional supported)',
    },
    yOffsetHexes: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      description: 'Y offset in hexes (fractional supported)',
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    
    container.style.cssText = `
      --hex-size: 120px;
      --gap: ${args.gap ?? 0}px;
      --row-count: ${args.rowCount ?? 4};
      --col-count: ${args.colCount ?? 5};
      --x-offset-hexes: ${args.xOffsetHexes ?? 0};
      --y-offset-hexes: ${args.yOffsetHexes ?? 0};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `axial-grid ${args.orientation}`;

    // Create a fixed grid of hexagons (5x4) - width/height only affect container sizing
    for (let r = 0; r < 4; r++) {
      for (let q = 0; q < 5; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};
