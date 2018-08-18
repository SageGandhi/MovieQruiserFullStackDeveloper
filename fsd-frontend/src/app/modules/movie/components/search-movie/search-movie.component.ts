import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';

@Component({
  selector: 'movie-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  public movies: Array<Movie>;
  public searcQuery: string;
  constructor(private movieService: TmdbMovieService) { }

  ngOnInit() {
  }
  onClickSearch() {
    console.log(`Search Key Entered:${this.searcQuery}`);
    this.movieService.searchByText(this.searcQuery).subscribe(movies => {
      this.movies = movies;
    });
  }
  onClickClear() {
    console.log(`Search Key Removed:${this.searcQuery}`);
    this.searcQuery = '';
    this.movies = [];
  }
}
