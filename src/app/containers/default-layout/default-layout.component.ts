import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import { navItemsNGO } from '../../_nav_ngo';
import { navItemsRes } from '../../_nav_restaurant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems: any;

  ngOnInit() {
    let userType = JSON.parse(window.localStorage.getItem('user')).details.type;
    switch(userType){
      case "restaurant" : {
        this.navItems = navItemsRes;
        break;
      }
      case "ngo" : {
        this.navItems = navItemsNGO;
        break;
      }
      default: {
        this.navItems = navItems;
        break;
      }
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
