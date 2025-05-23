import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormData } from '../models/form-data.model';
import { FormElement } from '../models/form-element.model';

/**
 * Service to build form data and form groups.
 * This service is used to create a form group and its corresponding form data.
 * It takes care of initializing the form group with the provided form elements and their validators.
 */
@Injectable({
  providedIn: 'root',
})
export class FormDataBuilder {
  /**
   * Constructor to initialize the FormDataBuilderService.
   * @param fb - The FormBuilder service to create form groups and controls.
   */
  constructor(private fb: FormBuilder) {}

  /**
   * Builds a form data object and a form group based on the provided data.
   * @param data - The data to build the form data and form group from.
   * @returns An object containing the form data and the form group.
   */
  public buildFormGroup(formData: FormData): FormGroup {
    const formGroup = this.fb.group(
      Object.fromEntries(
        formData.rows
          .map((row) =>
            row.elements.map((element) => {
              const control = this.fb.control(
                element.value ?? null,
                this.getSyncValidators(element),
                element.asyncValidators
              );
              return [element.key, control];
            })
          )
          .flat()
      )
    );

    return formGroup;
  }

  /**
   * Gets the synchronous validators for a form element.
   * @param formElement - The form element to get the validators for.
   * @returns An array of synchronous validators for the form element.
   */
  private getSyncValidators(formElement: FormElement): ValidatorFn[] {
    return [
      ...(formElement.required ? [Validators.required] : []),
      ...(formElement.min !== undefined
        ? [Validators.min(formElement.min)]
        : []),
      ...(formElement.max !== undefined
        ? [Validators.max(formElement.max)]
        : []),
      ...(formElement.validators || []),
    ];
  }
}
