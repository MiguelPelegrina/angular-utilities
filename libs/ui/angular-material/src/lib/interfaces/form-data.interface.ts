import { FormElement } from './form-element.interface';

/**
 * Represents the data for a form template.
 */
export interface FormData {
  title?: string;
  messages: string[];
  elements: FormElement[];
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
