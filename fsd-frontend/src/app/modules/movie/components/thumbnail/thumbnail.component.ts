import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  private movieList:Array<Movie>;

  constructor(private tmdbMovieService:TmdbMovieService) {
    this.movieList = [];
  }

  ngOnInit() {
    this.tmdbMovieService.getPopularMovies()
      //Spread Operator
      .subscribe(moviesList=>this.movieList.push(...moviesList));
  }
}
