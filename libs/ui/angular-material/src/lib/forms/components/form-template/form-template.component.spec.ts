import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTemplateComponent } from './form-template.component';

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
    }).compileComponents();

    fixture = TestBed.createComponent(FormTemplateComponent<MockForm>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
