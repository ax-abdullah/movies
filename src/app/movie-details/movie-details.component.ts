import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:number = 0;
  details:any = {};
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let snap = this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log(Number(snap), this._ActivatedRoute.snapshot);
    this.id = Number(snap)
    this._MoviesService.getMovieDetails(this.id).subscribe(response => {
      this.details = response;
      console.log(this.details);
    })
  }
  movieDetails(){

  }
}
