import { TestBed } from '@angular/core/testing';

import { ReviewsRestaurantService } from './reviews-restaurant.service';

describe('ReviewsRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsRestaurantService = TestBed.get(ReviewsRestaurantService);
    expect(service).toBeTruthy();
  });
});
