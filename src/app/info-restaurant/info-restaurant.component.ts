import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Lightbox } from 'ngx-lightbox';
import { ListRestaurantsService } from './../list-restaurants/list-restaurants.service';
import { Subscription } from 'rxjs';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
declare const google: any;
@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.css'],
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 2rem;
    color: #d3d3d3;
  }
  .full {
    color: skyblue;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: skyblue;
  }`],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class InfoRestaurantComponent implements OnInit, OnDestroy {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  _album:any = [];
  favorite: any = 0;;
  markers = []
  infoContent = ''
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  public restaurantDetail;
  constructor(private _lightbox: Lightbox, private service:ListRestaurantsService) {
    
  }
  addToFav() {}
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
geocoder:any;
  ngOnInit() {
    
    for (var i= 1; i <= 3; i++) {
      const src = 'assets/img/img/img' + i + '.jpg';
      const caption = 'Image ' + i + ' picture' + i;
      const thumb = 'assets/img/img/img' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this._album.push(album);
    }
    let id = JSON.parse(window.localStorage.getItem('data'))["details"].id
    this.service.getRestaurant(id).subscribe((res) => {
      this.restaurantDetail = res.msg;
      this.center = {
        lat: this.restaurantDetail.coordinates.latitude,
        lng: this.restaurantDetail.coordinates.longitude, 
      }
        this.addMarker(); 
      for (let i = 0; i < this.restaurantDetail.photos.length; i++) {
        this.addSlide(this.restaurantDetail.photos[i]);
      }
    })
        
}


  addMarker() {
    this.markers.push({
      position: {
        lat: this.restaurantDetail.coordinates.latitude,
        lng: this.restaurantDetail.coordinates.longitude,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }


  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  addSlide(url): void {
    setTimeout( () => {
      const seed = Math.random().toString(36).slice(-6);
      this.slides.push({
        image: `https://picsum.photos/seed/${seed}/900/500`
      });
    }, 500);
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
  

}
