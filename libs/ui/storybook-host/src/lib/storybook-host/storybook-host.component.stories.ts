import type { Meta, StoryObj } from '@storybook/angular';
import { StorybookHostComponent } from './storybook-host.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StorybookHostComponent> = {
  component: StorybookHostComponent,
  title: 'StorybookHostComponent',
};
export default meta;
type Story = StoryObj<StorybookHostComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/storybook-host works!/gi)).toBeTruthy();
  },
};
