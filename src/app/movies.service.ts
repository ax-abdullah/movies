import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // an example API request: https://api.themoviedb.org/3/movie/550?api_key=118ef4e4bc016839242aa18fc1008c7a

  KEY:string = '118ef4e4bc016839242aa18fc1008c7a';
  URL:string = 'https://api.themoviedb.org/3/';
  constructor(private _HttpClient: HttpClient) {}

  getTrending(mediaType:string):Observable<any> {
    return this._HttpClient.get(`${this.URL}/trending/${mediaType}/week?api_key=${this.KEY}`)
  }
  getMovieDetails(id:number):Observable<any>{
    return this._HttpClient.get(`${this.URL}movie/${id}?api_key=${this.KEY}`);
  }
}
