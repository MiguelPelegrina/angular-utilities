import { FormElement } from './form-element.interface';

export interface FormData {
  title: string;
  messages: string[];
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formElements?: FormElement[];
}
