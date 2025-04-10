import { TestBed } from '@angular/core/testing';

import { FormDataBuilderService } from './form-data.service';

describe('FormDataBuilderService', () => {
  let service: FormDataBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
