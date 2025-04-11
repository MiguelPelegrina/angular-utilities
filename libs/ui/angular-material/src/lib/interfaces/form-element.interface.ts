import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

/**
 * Represents a form element.
 */
export interface FormElement {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'time' | 'password';
  value?: string | number | Date;
  options?: { value: string | number; label: string }[];
  required?: boolean;
  min?: number;
  max?: number;
  customValidators?: ValidatorFn[];
  customAsyncValidators?: AsyncValidatorFn[];
}
