import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
  title: 'Hexagons',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PointyTop: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      --hex-size: 100px;
      display: flex;
      gap: 10px;
    `;
    container.className = 'pointy-top';

    for (let i = 0; i < 6; i++) {
      const hex = document.createElement('div');
      hex.className = 'hexagon-clip';
      hex.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      `;
      hex.textContent = `${i + 1}`;
      container.appendChild(hex);
    }

    return container;
  },
};

export const FlatTop: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      --hex-size: 100px;
      display: flex;
      gap: 10px;
    `;
    container.className = 'flat-top';

    for (let i = 0; i < 6; i++) {
      const hex = document.createElement('div');
      hex.className = 'hexagon-clip';
      hex.style.cssText = `
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      `;
      hex.textContent = `${i + 1}`;
      container.appendChild(hex);
    }

    return container;
  },
};
