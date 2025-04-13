import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

/**
 * Represents a form element.
 */
export class FormElement {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'time' | 'password';
  value?: string | number | Date;
  options?: { value: string | number; label: string }[];
  required?: boolean;
  min?: number;
  max?: number;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];

  /**
   * Creates an instance of FormElement.
   * @param options - The options for the form element.
   */
  constructor(options: {
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
  }) {
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
    this.value = options.value ?? '';
    this.options = options.options ?? undefined;
    this.required = options.required ?? false;
    this.min = options.min ?? undefined;
    this.max = options.max ?? undefined;
    this.validators = options.customValidators ?? [];
    this.asyncValidators = options.customAsyncValidators ?? [];
  }
}
