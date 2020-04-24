import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }
  checkValidation(tokenDetails): Observable<any> {
    // api call to get the services
    return this.httpClient.post<any>(environment.serverEndpoint + '/api/signin', {data:tokenDetails}, httpOptions);
  }
}
