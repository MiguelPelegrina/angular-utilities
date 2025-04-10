import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormTemplateComponent } from './form-template.component';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';

// TODO
// - Add more stories
type Story = StoryObj<FormTemplateComponent<object>>;

export const Default: Story = {
  name: 'Default',
  args: {
    data: {
      messages: ['Hello', 'these are your messages'],
      title: 'Testing',
      elements: [
        {
          key: 'name',
          label: 'Name',
          type: 'text',
          value: '',
          customValidators: [Validators.required],
        },
        {
          key: 'surname',
          label: 'Surname',
          type: 'text',
          value: '',
          customValidators: [Validators.required],
        },
        {
          key: 'email',
          label: 'Email',
          type: 'text',
          value: '',
          customValidators: [Validators.required, Validators.email],
        },
      ],
      showCancelButton: true,
    },
  },
};

export const NoForm: Story = {
  args: {
    data: {
      messages: ['Hello', 'these are your messages'],
      title: 'Testing',
      elements: [],
      showConfirmButton: false,
    },
  },
};

const meta: Meta<FormTemplateComponent<object>> = {
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
