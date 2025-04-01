import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorybookHostComponent } from './storybook-host.component';

describe('StorybookHostComponent', () => {
  let component: StorybookHostComponent;
  let fixture: ComponentFixture<StorybookHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorybookHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StorybookHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
