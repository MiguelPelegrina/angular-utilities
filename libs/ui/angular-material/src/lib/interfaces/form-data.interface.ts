import { FormRow } from './form-row.interface';

/**
 * Represents the data for a form template.
 */
export interface FormData {
  title?: string;
  messages: string[];
  rows: FormRow[];
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
