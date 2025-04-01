import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormTemplateComponent } from './form-template.component';
import { MatButtonModule } from '@angular/material/button';

type Story = StoryObj<FormTemplateComponent>;

export const Default: Story = {
  args: {
    data: {
      messages: ['Hello', 'these are your messages'],
      title: 'Testing',
      formElements: [],
    },
  },
};

const meta: Meta<FormTemplateComponent> = {
  title: 'FormTemplateComponent',
  component: FormTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormTemplateComponent, MatButtonModule],
    }),
  ],
};

export default meta;
