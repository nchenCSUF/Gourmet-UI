import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favDetails: any;
  constructor(private fService: FavoriteService, private router:Router) { }

  ngOnInit(): void {
    this.getLeftOverDetails();
  }

  getLeftOverDetails() {
    //let userId = JSON.parse(window.localStorage.getItem('user')).userId;
    this.favDetails = JSON.parse(window.localStorage.getItem('restaurants')).details;
    // this.fService.getFavoriteDetails(userId).subscribe((res)=>{
    //   this.favDetails = res.msg;
    // })
  }

  gotoRestaurantInfo(restaurant) {
    console.log("**", restaurant);
    window.localStorage.setItem( "data", JSON.stringify({"details": restaurant}));
    this.router.navigate(['/restaurant-info']);
  }


}
