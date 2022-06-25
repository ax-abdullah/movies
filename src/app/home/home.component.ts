import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[] = [];
  trendingTv:any[]= [];
  trendingPeople: any[] = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies = response?.results.slice(0, 10);
      console.log(this.trendingMovies);
    });
    this._MoviesService.getTrending('tv').subscribe(response => {
      this.trendingTv = response?.results.slice(0,10);
      console.log(this.trendingTv);
    });
    this._MoviesService.getTrending('person').subscribe(response => {
      this.trendingPeople = response?.results.filter((el:any) => el.profile_path).slice(0,10)
      console.log(this.trendingPeople);
    })
  }

}
