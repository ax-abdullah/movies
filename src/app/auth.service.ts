import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL:string= 'https://route-egypt-api.herokuapp.com/';
  constructor(private _HttpClient: HttpClient) { }
  register(data: object):Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signup`, data);
  }
  login(data: object): Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signin`, data);
  }
}
