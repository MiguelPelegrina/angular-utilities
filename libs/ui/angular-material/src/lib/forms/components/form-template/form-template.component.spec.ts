import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTemplateComponent } from './form-template.component';
import { provideValidationErrorMessages } from '../../providers/validation-error-messages.provider';
import { signal } from '@angular/core';

interface MockForm {
  name: string;
  email: string;
}

describe('FormTemplateComponent', () => {
  let component: FormTemplateComponent<MockForm>;
  let fixture: ComponentFixture<FormTemplateComponent<MockForm>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplateComponent],
      providers: [...provideValidationErrorMessages()],
    }).compileComponents();

    // Mock FormData

    fixture = TestBed.createComponent(FormTemplateComponent<MockForm>);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('data', new FormData());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
