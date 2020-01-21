import { TestBed } from '@angular/core/testing';

import { MyhttpService } from './myhttp.service';

describe('MyhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyhttpService = TestBed.get(MyhttpService);
    expect(service).toBeTruthy();
  });
});
