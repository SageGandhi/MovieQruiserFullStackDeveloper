import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';

@Component({
  selector: 'movie-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  private movies:Array<Movie>;
  constructor(private movieService:TmdbMovieService) {
    this.movies = [];
  }

  ngOnInit() {
    this.movieService.getMoviesByType('top_rated')
      .subscribe(moviesList=>this.movies.push(...moviesList))
      ;
  }

}
