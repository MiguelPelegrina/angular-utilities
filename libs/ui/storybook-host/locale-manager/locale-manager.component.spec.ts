import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaleManagerComponent } from './locale-manager.component';

describe('LocaleManagerComponent', () => {
  let component: LocaleManagerComponent;
  let fixture: ComponentFixture<LocaleManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
