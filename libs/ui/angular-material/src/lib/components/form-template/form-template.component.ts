import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormData } from '../../interfaces/form-data.interface';
import { FormDataBuilder } from '../../services/form-data.service';
import { MaterialModule } from '../../shared/material.module';
import { onTimeInput } from '../../utils/time-utils';

// TODO
// Abstractions:
// - Button row of buttons --> default cancel and confirm, allow for custom implementation for example for login and register
// - CSS classes instead of Bootstrap
// More customization:
// - Ideally, we would just loop through form rows and then form elements?
@Component({
  selector: 'lib-form-template',
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss', '../../styles/buttons.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTemplateComponent<T> implements OnInit {
  // Fields
  @Input() data?: FormData;

  @Output() formSubmit = new EventEmitter<T>();
  @Output() formCancel = new EventEmitter<void>();

  public form?: FormGroup;

  constructor(private formBuilder: FormDataBuilder) {}

  ngOnInit(): void {
    const { formData, formGroup } = this.formBuilder.build(this.data);
    this.data = formData;
    this.form = formGroup;
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
