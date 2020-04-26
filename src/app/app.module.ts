import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './login/login.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component'
import { LoginService} from './login/login.service';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  
} from '@coreui/angular';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';
import { getAuthServiceConfigs } from './login/socialloginconfig';
// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {NgbPaginationModule, NgbAlertModule, NgbRatingModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'

import { ChartsModule } from 'ng2-charts';
import { LeftoverComponent, NgbdModalContent } from './leftover/leftover.component';
import { LightboxModule } from 'ngx-lightbox';
import { InfoRestaurantComponent} from './info-restaurant/info-restaurant.component';
import { ReviewsRestaurantComponent } from './info-restaurant/reviews-restaurant/reviews-restaurant.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    NgbRatingModule,
    GoogleMapsModule,
    LightboxModule,
    NgbModalModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    ListRestaurantsComponent,
    NgbdModalContent,
    LeftoverComponent,
    InfoRestaurantComponent,
    ReviewsRestaurantComponent
  ],
  entryComponents:[NgbdModalContent],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
