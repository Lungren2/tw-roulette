import type { Meta, StoryObj } from '@storybook/react';

import {RouletteTable} from '../components/roulette-table';

const meta = {
  title: 'Example/Demo',
  component: RouletteTable,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RouletteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onBet: () => {}, // implement the onBet function
    bets: {}, // provide the bets object
    isDebug: false, // optional
  },
};