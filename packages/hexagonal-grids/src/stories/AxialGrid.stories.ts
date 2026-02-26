import type { Meta, StoryObj } from '@storybook/html-vite';

type AxialGridArgs = {
  orientation: 'pointy-top' | 'flat-top';
  gap: number;
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
  },
  render: (args) => {
    const container = document.createElement('div');
    
    // Calculate accurate bounds for the grid
    const minQ = 0;
    const maxQ = 4;
    const minR = 0;
    const maxR = 3;
    
    // For pointy-top: x depends on (q + r/2)
    // For flat-top: y depends on (q/2 + r)
    let minXCoord = Infinity;
    let maxXCoord = -Infinity;
    let minYCoord = Infinity;
    let maxYCoord = -Infinity;
    
    for (let r = minR; r <= maxR; r++) {
      for (let q = minQ; q <= maxQ; q++) {
        const xCoord = q + r / 2;
        const yCoord = q / 2 + r;
        minXCoord = Math.min(minXCoord, xCoord);
        maxXCoord = Math.max(maxXCoord, xCoord);
        minYCoord = Math.min(minYCoord, yCoord);
        maxYCoord = Math.max(maxYCoord, yCoord);
      }
    }
    
    container.style.cssText = `
      --hex-size: 120px;
      --gap: ${args.gap}px;
      --min-q: ${minQ};
      --max-q: ${maxQ};
      --min-r: ${minR};
      --max-r: ${maxR};
      --min-x-coord: ${minXCoord};
      --max-x-coord: ${maxXCoord};
      --min-y-coord: ${minYCoord};
      --max-y-coord: ${maxYCoord};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `axial-grid ${args.orientation}`;

    // Create a grid of hexagons
    for (let r = minR; r <= maxR; r++) {
      for (let q = minQ; q <= maxQ; q++) {
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
  },
  render: (args) => {
    const container = document.createElement('div');
    
    // Calculate accurate bounds for the grid
    const minQ = 0;
    const maxQ = 4;
    const minR = 0;
    const maxR = 3;
    
    // For pointy-top: x depends on (q + r/2)
    // For flat-top: y depends on (q/2 + r)
    let minXCoord = Infinity;
    let maxXCoord = -Infinity;
    let minYCoord = Infinity;
    let maxYCoord = -Infinity;
    
    for (let r = minR; r <= maxR; r++) {
      for (let q = minQ; q <= maxQ; q++) {
        const xCoord = q + r / 2;
        const yCoord = q / 2 + r;
        minXCoord = Math.min(minXCoord, xCoord);
        maxXCoord = Math.max(maxXCoord, xCoord);
        minYCoord = Math.min(minYCoord, yCoord);
        maxYCoord = Math.max(maxYCoord, yCoord);
      }
    }
    
    container.style.cssText = `
      --hex-size: 120px;
      --gap: ${args.gap}px;
      --min-q: ${minQ};
      --max-q: ${maxQ};
      --min-r: ${minR};
      --max-r: ${maxR};
      --min-x-coord: ${minXCoord};
      --max-x-coord: ${maxXCoord};
      --min-y-coord: ${minYCoord};
      --max-y-coord: ${maxYCoord};
      position: relative;
      background: #f0f0f0;
    `;
    container.className = `axial-grid ${args.orientation}`;

    // Create a grid of hexagons
    for (let r = minR; r <= maxR; r++) {
      for (let q = minQ; q <= maxQ; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};
