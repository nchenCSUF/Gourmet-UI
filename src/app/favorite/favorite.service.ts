import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { 
    
  }
  getFavoriteDetails(userId: any): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getfavorite");
  } 
}
