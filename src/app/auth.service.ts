import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL:string= 'https://route-egypt-api.herokuapp.com/';
  userData= new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) { }
  register(data: object):Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signup`, data);
  }
  login(data: object): Observable<any>{
    return this._HttpClient.post(`${this.BASE_URL}signin`, data);
  }
  setUserData():void{
    let encodedToken:string = JSON.stringify(localStorage.getItem('userData'));
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData.next(decodedToken)
  }

  logout():void{
    localStorage.removeItem('userData');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
