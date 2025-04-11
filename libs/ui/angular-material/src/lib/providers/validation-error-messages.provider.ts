// An InjectionToken used to provide and inject error message configuration.

import { InjectionToken, Provider } from '@angular/core';
import { ValidationErrorMessages } from '../interfaces/validation-error-messages.interface';
import { ERROR_MESSAGES_VALUE } from '../constants/validation-error-messages.constant';

// This allows different parts of the application to customize the error messages.
export const ERROR_MESSAGES = new InjectionToken<ValidationErrorMessages>(
  'Error Messages'
);

/**
 * Provides the default validation error messages to be used throughout the application.
 * This function is used in the root providers of your application.
 *
 * Returns an array of providers with the default error messages.
 * These providers can be further extended or overridden at the module or component level.
 */
export function provideValidationErrorMessages(): Provider[] {
  return [
    {
      // Provides the default error messages using the ERROR_MESSAGES token.
      provide: ERROR_MESSAGES,
      useValue: ERROR_MESSAGES_VALUE,
    },
  ];
}
