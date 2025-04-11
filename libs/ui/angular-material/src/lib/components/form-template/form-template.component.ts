import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormData } from '../../interfaces/form-data.interface';
import { FormDataBuilder as FormGroupBuilder } from '../../services/form-data.service';
import { MaterialModule } from '../../shared/material.module';
import { onTimeInput } from '../../utils/time-utils';
import { ValidationError } from '../../pipes/validation-error.pipe';
import { ValidationErrorMessages } from '../../interfaces/validation-error-messages.interface';
import { ERROR_MESSAGES } from '../../providers/validation-error-messages.provider';

// TODO
// Abstractions:
// - Button row of buttons
//  - allow for custom implementation for example for login and register
//  - dont know how to output the form
// - CSS classes instead of Bootstrap classes
@Component({
  selector: 'lib-form-template',
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, ValidationError],
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss', '../../styles/buttons.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTemplateComponent<T> implements OnInit {
  // Fields
  data = input.required<FormData>();

  formSubmit = output<T>();
  formCancel = output<void>();
  formDelete = output<boolean>();

  public form?: FormGroup;

  constructor(
    @Inject(ERROR_MESSAGES) private errorMessages: ValidationErrorMessages,
    private formBuilder: FormGroupBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.buildFormGroup(this.data());
  }

  /**
   * When the interaction is confirmed.
   */
  protected onConfirm() {
    this.formSubmit.emit(this.form?.value as T);
  }

  /**
   * When the interaction is cancelled.
   */
  protected onCancel() {
    this.formCancel.emit();
  }

  /**
   * Handles time input and automatically formats time input to HH:mm.
   * @param event
   */
  protected onTimeInput(event: Event, controlName: string): void {
    this.form?.get(controlName)?.setValue(onTimeInput(event));
  }
}
