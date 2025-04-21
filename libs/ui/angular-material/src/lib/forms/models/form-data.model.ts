import { FormRow } from './form-row.model';
import { FormStyles } from './form-styles.model';

/**
 * Represents the data for a form template.
 */
export class FormData {
  title?: string;
  messages: string[];
  rows: FormRow[];
  showConfirmButton: boolean;
  showCancelButton: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  styles: FormStyles;

  /**
   * Constructor for the FormData class.
   * @param options - Named options to initialize the form data.
   */
  constructor(options: Partial<FormData> = {}) {
    this.title = options.title;
    this.messages = options.messages ?? [];
    this.rows = options.rows ?? [];
    this.showConfirmButton = options.showConfirmButton ?? true;
    this.showCancelButton = options.showCancelButton ?? false;
    this.confirmButtonText = options.confirmButtonText ?? 'Confirm';
    this.cancelButtonText = options.cancelButtonText ?? 'Cancel';
    this.styles = options.styles ?? new FormStyles();
  }
}
