// Default error messages for common validation errors.

import { ValidationErrorMessages } from '../interfaces/validation-error-messages.interface';

// These serve as the fallback messages when custom messages are not provided.
export const ERROR_MESSAGES_VALUE: ValidationErrorMessages = {
  unknown: 'This field has an error',
  required: 'This field is required',
  email: 'Please enter a valid email',
  min: 'The value is too low',
  max: 'The value is too high',
};
