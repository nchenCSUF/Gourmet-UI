import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LeftoverService {

  constructor(private http: HttpClient) { }
  getApiLeftOverList(): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getleftoverdetails");
  } 
}
