import { Component, OnInit } from '@angular/core';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'movie-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  private movies:Array<Movie>;
  constructor(private movieService:TmdbMovieService) {
    this.movies = [];
  }

  ngOnInit() {
    this.movieService.getMoviesByType('popular')
      .subscribe(moviesList=>this.movies.push(...moviesList))
      ;
  }
}
