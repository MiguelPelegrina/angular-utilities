import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../providers/validation-error-messages.provider';
import { ValidationErrorMessages } from '../interfaces/validation-error-messages.interface';

/**
 * Pipe to transform validation errors into user-friendly error messages.
 *
 * This pipe takes a ValidationErrors object and returns a string representation of the errors.
 * It uses the provided error messages for common validation errors.
 *
 * Usage:
 * ```html
 * <span>{{ formControl.errors | validationError }}</span>
 * ```
 */
@Pipe({
  name: 'validationError',
  standalone: true,
})
export class ValidationError implements PipeTransform {
  /**
   * Constructor for the ValidationError pipe.
   * @param errorMessages - The error messages to use for validation errors.
   */
  constructor(
    @Inject(ERROR_MESSAGES) private errorMessages: ValidationErrorMessages
  ) {}

  /**
   * Transforms the validation errors into a user-friendly string.
   * @param errors - The validation errors to transform.
   * @returns A string representation of the validation errors.
   */
  transform(errors: ValidationErrors | null | undefined): string {
    return errors
      ? Object.entries(errors)
          .map(([key, value]) =>
            typeof value === 'string' && value.length > 0
              ? value
              : value === true
              ? this.errorMessages[key] ?? this.errorMessages['unknown']
              : this.errorMessages['unknown']
          )
          .join('. ')
      : '';
  }
}
