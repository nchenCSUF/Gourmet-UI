import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListRestaurantsService {
  constructor(private http: HttpClient) {
  }

  getApiRestaurantList(lat: String, longi:String, searchText: String): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getrestaurantslist?searchValue=" + searchText + "&lat=" + lat + "&longi=" + longi);
  } 
}
