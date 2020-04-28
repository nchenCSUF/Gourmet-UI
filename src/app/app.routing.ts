import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './login/login.component';
import { ListRestaurantsComponent} from './list-restaurants/list-restaurants.component';
import { LeftoverComponent } from './leftover/leftover.component'
import { InfoRestaurantComponent } from './info-restaurant/info-restaurant.component'
import { FavoriteComponent } from './favorite/favorite.component';
import { AddleftoverComponent } from './leftover/addleftover/addleftover.component';
import { ReviewsRestaurantComponent } from './info-restaurant/reviews-restaurant/reviews-restaurant.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'search-restaurants',
        component: ListRestaurantsComponent
      },
      {
        path: 'restaurant-info',
        component: InfoRestaurantComponent
      },
      {
        path: 'left-over-food',
        component: LeftoverComponent
      },
      {
        path: 'fav',
        component: FavoriteComponent
      },
      {
        path: 'add-left-over',
        component: AddleftoverComponent

      },
      {
        path: 'reviews',
        component: ReviewsRestaurantComponent

      }
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
