import { Component, OnInit, Input } from '@angular/core';
import {ReviewsRestaurantService} from './reviews-restaurant.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reviews-restaurant',
  templateUrl: './reviews-restaurant.component.html',
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 1rem;
    color: #d3d3d3;
  }
  .full {
    color: blue;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: blue;
  }`]
})
export class ReviewsRestaurantComponent implements OnInit {
  @Input()
    restaurantId: string;
    reviewsList: any;
  constructor(private reviewService: ReviewsRestaurantService, config:NgbRatingConfig ) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }

  getReviews() {
    this.reviewService.getApiReviews(this.restaurantId).subscribe((res)=>{
      this.reviewsList = res.data;
    })
  }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
