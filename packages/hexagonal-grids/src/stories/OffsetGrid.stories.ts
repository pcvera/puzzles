import type { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Grid/Offset Grid',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

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
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      --hex-size: 120px;
      --gap: 0px;
      --min-q: 0;
      --max-q: 4;
      --min-r: 0;
      --max-r: 3;
      position: relative;
      background: #f0f0f0;
    `;
    container.className = 'offset-grid flat-top';

    // Create a grid of hexagons
    for (let r = 0; r <= 3; r++) {
      for (let q = 0; q <= 4; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};

export const PointyTop: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      --hex-size: 120px;
      --gap: 0px;
      --min-q: 0;
      --max-q: 4;
      --min-r: 0;
      --max-r: 3;
      position: relative;
      background: #f0f0f0;
    `;
    container.className = 'offset-grid pointy-top';

    // Create a grid of hexagons
    for (let r = 0; r <= 3; r++) {
      for (let q = 0; q <= 4; q++) {
        container.appendChild(createHex(q, r));
      }
    }

    return container;
  },
};
