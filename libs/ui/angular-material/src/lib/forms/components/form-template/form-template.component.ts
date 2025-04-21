import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormData } from '../../models/form-data.model';
import { FormDataBuilder as FormGroupBuilder } from '../../services/form-data.service';
import { MaterialModule } from '../../../shared/modules/material.module';
import { onTimeInput } from '../../../shared/utils/time-utils';
import { ValidationErrorMessages } from '../../interfaces/validation-error-messages.interface';
import { FormControlComponent } from '../form-control/form-control.component';
import { SharedModule } from '../../../shared/modules/shared.module';
import { ERROR_MESSAGES } from '../../providers/validation-error-messages.provider';

// TODO
// Abstractions:
// - Button row of buttons
//  - allow for custom implementation for example for login and register
//  - dont know how to output the form
@Component({
  selector: 'lib-form-template',
  imports: [FormControlComponent, MaterialModule, SharedModule],
  templateUrl: './form-template.component.html',
  styleUrls: [
    './form-template.component.scss',
    '../../../shared/styles/buttons.scss',
  ],
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

  protected getAlignment(alignment?: 'left' | 'right' | 'center'): string {
    switch (alignment) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  }
}
