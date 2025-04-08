import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

/**
 * Interface representing data for form elements.
 */
export interface FormElement {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'time';
  value?: string | number | Date;
  options?: { value: string | number; label: string }[];
  required?: boolean;
  min?: number;
  max?: number;
  customValidators?: ValidatorFn[];
  customAsyncValidators?: AsyncValidatorFn[];
}
