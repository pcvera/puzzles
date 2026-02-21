import type { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Grid/Offset Grid',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
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
    container.className = 'offset-grid';

    // Create a grid of hexagons
    for (let r = 0; r <= 3; r++) {
      for (let q = 0; q <= 4; q++) {
        const hex = document.createElement('div');
        hex.className = 'placed-hex';
        hex.style.cssText = `
          --q: ${q};
          --r: ${r};
          width: calc(var(--hex-size) / 1.1547);
          height: var(--hex-size);
          clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
        `;
        hex.textContent = `${q},${r}`;
        container.appendChild(hex);
      }
    }

    return container;
  },
};
