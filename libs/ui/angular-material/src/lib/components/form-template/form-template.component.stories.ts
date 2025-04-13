import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormTemplateComponent } from './form-template.component';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { provideValidationErrorMessages } from '../../providers/validation-error-messages.provider';
import { FormData } from '../../models/form-data.model';

// TODO
// - Add more stories
type Story = StoryObj<FormTemplateComponent<object>>;

export const Default: Story = {
  name: 'Default',
  args: {
    data: new FormData({
      messages: ['Hello', 'these are your messages'],
      title: 'Testing',
      rows: [
        {
          elements: [
            {
              key: 'name',
              label: 'Name',
              type: 'text',
              value: '',
              validators: [Validators.required],
            },
            {
              key: 'surname',
              label: 'Surname',
              type: 'text',
              value: '',
              validators: [Validators.required],
            },
          ],
        },
        {
          elements: [
            {
              key: 'email',
              label: 'Email',
              type: 'text',
              value: '',
              validators: [Validators.required, Validators.email],
            },
            {
              key: 'password',
              label: 'Password',
              type: 'password',
              value: '',
              validators: [Validators.required],
            },
          ],
        },
        {
          styles: { alignment: 'left' },
          elements: [
            {
              key: 'age',
              label: 'Age',
              type: 'number',
              value: '',
              validators: [Validators.required, Validators.min(18)],
            },
          ],
        },
      ],
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }),
  },
};

export const NoForm: Story = {
  args: {
    data: new FormData({
      messages: ['Hello', 'these are your messages'],
      title: 'Testing',
      rows: [],
      showConfirmButton: false,
    }),
  },
};

const meta: Meta<FormTemplateComponent<object>> = {
  title: 'FormTemplateComponent',
  component: FormTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormTemplateComponent, MatButtonModule],
      providers: [...provideValidationErrorMessages()],
    }),
  ],
};

export default meta;
