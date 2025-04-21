import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SearchBarComponent } from './search-bar.component';

type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
  name: 'Default',
  args: {
    placeholder: 'Search...',
    debounce: 300,
    useService: true,
  },
};

const meta: Meta<SearchBarComponent> = {
  title: 'Search Bar',
  component: SearchBarComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SearchBarComponent],
    }),
  ],
};

export default meta;
