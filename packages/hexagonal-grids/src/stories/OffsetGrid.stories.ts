import type { Meta, StoryObj } from '@storybook/html-vite';

type OffsetGridArgs = {
  offsetType: 'odd-q' | 'even-q' | 'odd-r' | 'even-r';
  gap: number;
  widthHexes: number;
  heightHexes: number;
  xOffsetHexes: number;
  yOffsetHexes: number;
};

const meta = {
  title: 'Grid/Offset Grid',
  tags: ['autodocs'],
} satisfies Meta<OffsetGridArgs>;

export default meta;
type Story = StoryObj<OffsetGridArgs>;

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
    offsetType: 'odd-q',
    gap: 0,
    widthHexes: 5,
    heightHexes: 4,
    xOffsetHexes: 0,
    yOffsetHexes: 0,
  },
  argTypes: {
    offsetType: {
      control: 'radio',
      options: ['odd-q', 'even-q'],
      labels: {
        'odd-q': 'Odd-Q',
        'even-q': 'Even-Q',
      },
    },
    gap: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Gap between hexagons in pixels',
    },
    widthHexes: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Container width in hexes (fractional supported)',
    },
    heightHexes: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Container height in hexes (fractional supported)',
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
      --gap: ${args.gap}px;
      --width-hexes: ${args.widthHexes};
      --height-hexes: ${args.heightHexes};
      --x-offset-hexes: ${args.xOffsetHexes};
      --y-offset-hexes: ${args.yOffsetHexes};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `offset-grid flat-top ${args.offsetType}`;

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
    offsetType: 'odd-r',
    gap: 0,
    widthHexes: 5,
    heightHexes: 4,
    xOffsetHexes: 0,
    yOffsetHexes: 0,
  },
  argTypes: {
    offsetType: {
      control: 'radio',
      options: ['odd-r', 'even-r'],
      labels: {
        'odd-r': 'Odd-R',
        'even-r': 'Even-R',
      },
    },
    gap: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Gap between hexagons in pixels',
    },
    widthHexes: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Container width in hexes (fractional supported)',
    },
    heightHexes: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
      description: 'Container height in hexes (fractional supported)',
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
      --gap: ${args.gap}px;
      --width-hexes: ${args.widthHexes};
      --height-hexes: ${args.heightHexes};
      --x-offset-hexes: ${args.xOffsetHexes};
      --y-offset-hexes: ${args.yOffsetHexes};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `offset-grid pointy-top ${args.offsetType}`;

    // Create a fixed grid of hexagons (5x4) - width/height only affect container sizing
    for (let r = 0; r < 4; r++) {
      for (let q = 0; q < 5; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};
