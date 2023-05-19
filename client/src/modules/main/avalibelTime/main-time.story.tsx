import type { Meta, StoryObj } from '@storybook/react';
import { AvalibelTime } from './main-time.components';

export default {
  title: 'Modules/Main/AvalibelTime',
  component: AvalibelTime,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AvalibelTime>;
type Story = StoryObj<typeof AvalibelTime>;

export const View: Story = {};

