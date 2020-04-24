import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeftoverService {

  constructor(private http: HttpClient) { }
  getApiLeftOverList(): Observable<any> {
    return this.http.get("http://localhost:3000/api/getleftoverdetails");
  } 
}
