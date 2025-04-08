import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormData } from '../../interfaces/form-data.interface';
import { FormElement } from '../../interfaces/form-element.interface';

// TODO
// Abstractions:
// - Button row of buttons --> default cancel and confirm, allow for custom implementation for example for login and register
// - CSS classes instead of Bootstrap
// More customization:
// - width and height of elements
// - How form elements are split in rows
// - Ideally, we would just loop through form rows and then form elements?
@Component({
  selector: 'lib-form-template',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTemplateComponent {
  // Fields
  @Input() data: FormData = { title: '', messages: [], formElements: [] };

  //@Output() formSubmit = new EventEmitter<T>();

  public form?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
    this.assignDefaultValues(this.data);
  }

  /**
   * Assigns default values to data if not initialized previously.
   * @param data - The data, that the form needs to work with.
   */
  private assignDefaultValues(data: FormData): void {
    this.data = {
      ...data,
      showConfirmButton: data.showConfirmButton ?? true,
      showCancelButton: data.showCancelButton ?? false,
      confirmButtonText: data.confirmButtonText ?? 'Delete',
      cancelButtonText: data.cancelButtonText ?? 'Cancel',
    };
  }

  /**
   * Creates a form dynamically from the received form elements.
   * @returns A form group.
   */
  private createForm(): FormGroup {
    const group: Record<string, object> = {};

    this.data.formElements?.forEach((element: FormElement) => {
      group[element.key] = [
        element.value || '',
        [
          ...(element.required ? [Validators.required] : []),
          ...(element.min !== undefined ? [Validators.min(element.min)] : []),
          ...(element.max !== undefined ? [Validators.max(element.max)] : []),
          ...(element.customValidators || []),
        ],
        element.customAsyncValidators || [],
      ];
    });

    return this.formBuilder.group(group);
  }
}
