import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlComponent } from './form-control.component';
import { provideValidationErrorMessages } from '../../providers/validation-error-messages.provider';

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlComponent],
      providers: [...provideValidationErrorMessages()],
    }).compileComponents();

    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
