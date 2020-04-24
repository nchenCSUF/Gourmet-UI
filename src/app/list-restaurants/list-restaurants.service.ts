import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListRestaurantsService {
  constructor(private http: HttpClient) {
  }

  getApiRestaurantList(lat: String, longi:String, searchText: String): Observable<any> {
    return this.http.get("http://localhost:3000/api/getrestaurantslist?searchValue=" + searchText + "&lat=" + lat + "&longi=" + longi);
  } 
}
