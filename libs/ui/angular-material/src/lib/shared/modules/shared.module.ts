import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationError } from '../../forms/pipes/validation-error.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ValidationError],
  declarations: [],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule, ValidationError],
})
export class SharedModule {}
