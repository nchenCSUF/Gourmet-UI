import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favDetails: any;
  constructor(private fService: FavoriteService) { }

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


}
