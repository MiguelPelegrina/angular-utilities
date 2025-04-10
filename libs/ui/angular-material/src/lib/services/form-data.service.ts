import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormData } from '../interfaces/form-data.interface';
import { FormElement } from '../interfaces/form-element.interface';

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
  public build(data?: FormData): {
    formData: FormData;
    formGroup: FormGroup;
  } {
    const normalizedData: FormData = {
      title: data?.title ?? '',
      messages: data?.messages ?? [],
      showConfirmButton: data?.showConfirmButton ?? true,
      showCancelButton: data?.showCancelButton ?? false,
      confirmButtonText: data?.confirmButtonText ?? 'Submit',
      cancelButtonText: data?.cancelButtonText ?? 'Cancel',
      elements: data?.elements ?? [],
    };

    const formGroup = this.fb.group(
      Object.fromEntries(
        normalizedData.elements.map((element) => [
          element.key,
          this.fb.control(
            element.value ?? '',
            this.getSyncValidators(element),
            element.customAsyncValidators || []
          ),
        ])
      )
    );

    return { formData: normalizedData, formGroup };
  }

  /**
   *
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
      ...(formElement.customValidators || []),
    ];
  }
}
