import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormElement } from '../../models/form-element.model';
import { FormGroup } from '@angular/forms';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { onTimeInput } from '../../../shared/utils/time-utils';
import { ValidationError } from '../../pipes/validation-error.pipe';

@Component({
  selector: 'lib-form-control',
  imports: [MaterialModule, SharedModule, ValidationError],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
  element = input.required<FormElement>();
  form = input.required<FormGroup>();

  get isValid() {
    return this.form().controls[this.element().key].valid;
  }

  get control() {
    return this.form().get(this.element().key);
  }

  /**
   * Handles time input and automatically formats time input to HH:mm.
   * @param event
   */
  protected onTimeInput(event: Event, controlName: string): void {
    this.form().get(controlName)?.setValue(onTimeInput(event));
  }
}
