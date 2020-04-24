import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewsRestaurantService {

  constructor(private http: HttpClient) { }
  getApiReviews(restaurantId: string): Observable<any> {
    return this.http.get("http://localhost:3000/api/getreviews");
  }

}
