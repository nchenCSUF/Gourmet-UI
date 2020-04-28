import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReviewsRestaurantService {

  constructor(private http: HttpClient) { }
  getApiReviews(restaurantId: string): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getreviews?id=" + restaurantId);
  }

}
