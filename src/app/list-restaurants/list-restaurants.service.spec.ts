import { TestBed } from '@angular/core/testing';

import { ListRestaurantsService } from './list-restaurants.service';

describe('ListRestaurantsService', () => {
  let service: ListRestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
