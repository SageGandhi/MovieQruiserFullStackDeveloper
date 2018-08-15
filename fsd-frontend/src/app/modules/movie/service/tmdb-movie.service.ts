import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TmdbMovieService {
  private tmdbEndpoint: string;
  private imageBaseUri: string;
  private apiKeyQueryString:string;
  //https://raw.githubusercontent.com/mlabouardy/moviedb/master/moviedb_test.go
  private imageW185H278 = "w185_and_h278_bestv2";
  constructor(private http: HttpClient) {
    this.imageBaseUri = "https://image.tmdb.org/t/p/";
    this.tmdbEndpoint = "https://api.themoviedb.org/3/movie/";
    this.apiKeyQueryString = "api_key=ed7616b341eab536bc2958001630a397";
    //https://api.themoviedb.org/3/movie/popular?api_key=ed7616b341eab536bc2958001630a397&page=1
    //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  }
  getMoviesByType(type:String, page:number = 1 ):Observable<Array<Movie>> {
    return this.http.get(`${this.tmdbEndpoint}${type}?${this.apiKeyQueryString}&page=${page}`).pipe(
      retry(3),
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
