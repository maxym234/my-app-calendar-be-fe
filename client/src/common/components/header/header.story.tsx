import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.component';

export default {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Header>;
type Story = StoryObj<typeof Header>;

export const View: Story = {};

