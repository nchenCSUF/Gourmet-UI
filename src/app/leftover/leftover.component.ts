import { Component, OnInit } from '@angular/core';
import  { leftOverItem } from './leftover-model';
import { Subscription } from 'rxjs';
import { LeftoverService } from './leftover.service';

@Component({
  selector: 'app-leftover',
  templateUrl: './leftover.component.html',
  styleUrls: ['./leftover.component.css']
})
export class LeftoverComponent implements OnInit {
  public itemList: leftOverItem[];
  constructor(private rListService: LeftoverService) { }

  ngOnInit() {
    this.getLeftOverDetails();
  }

  getLeftOverDetails() {
    this.rListService.getApiLeftOverList().subscribe((res)=>{
      this.itemList = res.msg;
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
