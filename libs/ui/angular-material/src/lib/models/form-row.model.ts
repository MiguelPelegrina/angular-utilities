import { FormElement } from './form-element.model';
import { FormStyles } from './form-styles.model';

// TODO rem or px for numeric values?
/**
 * Represents a row of form elements in a form.
 */
export class FormRow {
  elements: FormElement[];
  styles?: FormStyles;

  constructor(elements: FormElement[], styles?: FormStyles) {
    this.elements = elements;
    this.styles = styles;
  }
}
