import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL:string= 'https://route-egypt-api.herokuapp.com/';
  userData:object = {};
  constructor(private _HttpClient: HttpClient) { }
  register(data: object):Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signup`, data);
  }
  login(data: object): Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signin`, data);
  }
  setUserData():void{
    let encodedToken:string = JSON.stringify(localStorage.getItem('userData'));
    let decodedToken:object = jwtDecode(encodedToken);
    console.log(decodedToken); 

  }
}
