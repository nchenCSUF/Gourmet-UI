import { Component, OnInit, ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.css']
})
export class InfoRestaurantComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  markers = []
  infoContent = ''
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  public restaurantDetail;
  constructor() {}
geocoder:any;
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: this.restaurantDetail.coordinates.latitude,
        lng: this.restaurantDetail.coordinates.longitude, }
        this.addMarker();
    });
    
    this.geocoder = new google.maps.Geocoder;
  
  

  console.log(JSON.parse(window.localStorage.getItem('data')));
    this.restaurantDetail = JSON.parse(window.localStorage.getItem('data')).details;
    // this.geocoder.geocode( { 'address': "New york city"}, function(results, status) {

    //   if (status == google.maps.GeocoderStatus.OK) {
    //     console.log(results)
    //       var latitude = results[0].geometry.location.lat();
    //       var longitude = results[0].geometry.location.lng();
    //       this.center = {
    //         lat: latitude,
    //         lng: longitude,
    //       }
    //       this.addMarker();
    //       } 
    //   }); 
      
}
    
    
  
  
  

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
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
