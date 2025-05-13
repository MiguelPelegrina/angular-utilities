import { TestBed } from '@angular/core/testing';

import { FormDataBuilder } from './form-data.service';

describe('FormDataBuilderService', () => {
  let service: FormDataBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
