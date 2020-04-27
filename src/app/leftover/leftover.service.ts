import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LeftoverService {

  constructor(private http: HttpClient) { }
  getApiLeftOverList(): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getleftoverdetails");
  } 

  getApiLeftOverListId(id): Observable<any> {
    return this.http.get(environment.serverEndpoint + "/api/getleftoverdetailsbyId?id=" + id);
  } 

  addLeftOver(data): Observable<any> {
    return this.http.post<any>(environment.serverEndpoint + '/api/createLeftOver', data , httpOptions);
  }

  deleteFoodItem(id,useBy): Observable<any> {
    return this.http.delete<any>(environment.serverEndpoint + '/api/deletefood?id=' + id + "&useBy="+ useBy, httpOptions);
  }
}
