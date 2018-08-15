import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-tmdb-container-watchlist',
  templateUrl: './tmdb-container-watchlist.component.html',
  styleUrls: ['./tmdb-container-watchlist.component.css']
})
export class TmdbContainerWatchlistComponent implements OnInit {
  private movies:Array<Movie>;
  private movieType:string;
  constructor(private movieService:TmdbMovieService,private routes:ActivatedRoute) {
    this.movies = [];
    this.routes.data.subscribe((datum)=>{
      console.log(datum);
      this.movieType = datum.movieType;
    });
  }

  ngOnInit() {
    this.movieService.getMoviesByType(this.movieType)
      .subscribe(moviesList=>this.movies.push(...moviesList));
  }
}
