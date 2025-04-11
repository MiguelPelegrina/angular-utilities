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
      rows: [
        {
          formElements: [
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
          ],
          height: 100,
          width: 100,
          marginOfElements: 10,
          paddingOfElements: 10,
        },
        {
          formElements: [
            {
              key: 'email',
              label: 'Email',
              type: 'text',
              value: '',
              customValidators: [Validators.required],
            },
            {
              key: 'password',
              label: 'Password',
              type: 'password',
              value: '',
              customValidators: [Validators.required],
            },
          ],
          height: 100,
          width: 100,
          marginOfElements: 10,
          paddingOfElements: 10,
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
      rows: [],
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
