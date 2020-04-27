import { Component, OnInit, ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Lightbox } from 'ngx-lightbox';
declare const google: any;
@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.css'],
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: red;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: red;
  }`]
})
export class InfoRestaurantComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

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
  constructor(private _lightbox: Lightbox) {
    
  }

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

    // navigator.geolocation.getCurrentPosition(position => {
      
    // });
    this.restaurantDetail = JSON.parse(window.localStorage.getItem('data')).details;
    this.center = {
      lat: this.restaurantDetail.coordinates.latitude,
      lng: this.restaurantDetail.coordinates.longitude, 
    }
      this.addMarker();
    
    this.geocoder = new google.maps.Geocoder;
  
  

  console.log(JSON.parse(window.localStorage.getItem('data')));
    
     
}
    
    
addToFav (){

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



  

}
