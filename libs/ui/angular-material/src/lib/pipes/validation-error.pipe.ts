import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../providers/validation-error-messages.provider';
import { ValidationErrorMessages } from '../interfaces/validation-error-messages.interface';

@Pipe({
  name: 'validationError',
  standalone: true,
})
export class ValidationError implements PipeTransform {
  constructor(
    @Inject(ERROR_MESSAGES) private errorMessages: ValidationErrorMessages
  ) {}

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
