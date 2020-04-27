import { Component, OnInit } from '@angular/core';
import { ListRestaurantsService } from './list-restaurants.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css'],
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 1rem;
    color: #d3d3d3;
  }
  .full {
    color: yellow;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: yellow;
  }`],
  providers: [NgbRatingConfig]
})
export class ListRestaurantsComponent implements OnInit {
  public response: any;
  public searchText: String = "";
  constructor(private rListService: ListRestaurantsService, private router: Router, config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  latitude: any;
  longitude: any;
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((result) => {
        this.latitude =  result.coords.latitude.toFixed(3);
        this.longitude = result.coords.longitude.toFixed(3);
      });
    }
  }  

  searchRestaurants() {
    this.response = [];
    this.rListService.getApiRestaurantList(this.latitude, this.longitude, this.searchText).subscribe((res)=>{
      let temp = res.msg;
      temp.businesses.sort((a,b) => Number(a['distance'] - b['distance']));
      this.response = temp;
    })
  }

  sortByRating() {
    let temp = this.response
    temp.businesses.sort((a,b) => 
      Number(b["rating"] - a["rating"])
    )
    console.log(temp)
    this.response = Object.assign({}, temp);
  }

  calculateDistance(distance) {
    return (parseInt(distance) / 1000).toFixed(1) + " miles";
  }
  
  gotoRestaurantInfo(restaurant) {
    console.log("**", restaurant);
    window.localStorage.setItem( "restaurants", JSON.stringify({"details": this.response}));
    window.localStorage.setItem('data', JSON.stringify({"details":restaurant}));
    this.router.navigate(['/restaurant-info']);
  }
  
  

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

}
