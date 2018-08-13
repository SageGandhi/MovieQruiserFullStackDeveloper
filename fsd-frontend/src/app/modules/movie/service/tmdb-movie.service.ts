import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { map } from 'rxjs/operators';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable()
export class TmdbMovieService {
  private tmdbEndpoint: string;
  private imageBaseUri: string;
  //https://raw.githubusercontent.com/mlabouardy/moviedb/master/moviedb_test.go
  private imageW185H278 = "w185_and_h278_bestv2";
  constructor(private http: HttpClient) {
    this.imageBaseUri = "https://image.tmdb.org/t/p/";
    this.tmdbEndpoint = "https://api.themoviedb.org/3/movie/popular?api_key=ed7616b341eab536bc2958001630a397&page=1";
  }
  getPopularMovies():Observable<Array<Movie>> {
    return this.http.get(this.tmdbEndpoint).pipe(
      map(this.pickMovieResults),
      map(this.transformPosterPath.bind(this))
    );
  }
  transformPosterPath(movies: Array<Movie>):Array<Movie> {
    movies.map(movieTemp => {
      console.log(`Movie:${JSON.stringify(movieTemp)}`);
      console.log(`PosterPath:${this.imageBaseUri}${this.imageW185H278}${movieTemp['poster_path']}`);
      movieTemp['poster_path'] = `${this.imageBaseUri}${this.imageW185H278}${movieTemp['poster_path']}`;
      return movieTemp;
    });
    return movies;
  }
  pickMovieResults(movies){
    return movies['results'];
  }
}
