import { TestBed } from '@angular/core/testing';

import { UsCapitalsService } from './us-capitals.service';

describe('UsCapitalsService', () => {
  let service: UsCapitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsCapitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
