import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRestaurantComponent } from './reviews-restaurant.component';

describe('ReviewsRestaurantComponent', () => {
  let component: ReviewsRestaurantComponent;
  let fixture: ComponentFixture<ReviewsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
