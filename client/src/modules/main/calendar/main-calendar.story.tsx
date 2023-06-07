import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './main-calendar.components';

export default {
  title: 'Modules/Main/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;
type Story = StoryObj<typeof Calendar>;

export const View: Story = {};

