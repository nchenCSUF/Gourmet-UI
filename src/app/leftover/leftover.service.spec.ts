import { TestBed } from '@angular/core/testing';

import { LeftoverService } from './leftover.service';

describe('LeftoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftoverService = TestBed.get(LeftoverService);
    expect(service).toBeTruthy();
  });
});
