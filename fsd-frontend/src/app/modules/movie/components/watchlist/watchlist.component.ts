import { Component, OnInit } from '@angular/core';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { Movie } from '../../movie';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'movie-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  public movies:Array<Movie>;
  public inWatchListApi:boolean;
  constructor(private movieService:TmdbMovieService,private snackBar:MatSnackBar) {
    this.movies = [];
    this.inWatchListApi = true;
   }

  ngOnInit() {
    this.movieService.getAllMoviesFromExistingWishList()
      .subscribe(movies=>{
        this.movies.push(...movies);
      });
  }
}
