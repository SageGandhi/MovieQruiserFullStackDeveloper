import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movie';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TmdbMovieService {
  private tmdbEndpoint: string;
  private imageBaseUri: string;
  private apiKeyQueryString: string;
  private apiKey: string;
  private baseWishlistUri: string;
  private createWishlistUri: string;
  private getAllWishlistUri: string;
  private updateWishlistUri: string;
  private deleteWishlistUri:string;
  private movieSearchUri:string;
  //https://raw.githubusercontent.com/mlabouardy/moviedb/master/moviedb_test.go

  constructor(private http: HttpClient) {
    this.apiKey = '5fdf2806647c21ec8d2d34b7e4e6b0a1';
    // this.baseWishlistUri = 'http://localhost:3000';
    this.baseWishlistUri = 'http://localhost:8080/api/v1/movie';

    // this.createWishlistUri = this.baseWishlistUri + "/movies";
    this.createWishlistUri = this.baseWishlistUri;
    // this.getAllWishlistUri = this.baseWishlistUri + "/movies";
    this.getAllWishlistUri = this.baseWishlistUri;
    // this.updateWishlistUri = this.baseWishlistUri + "/movies";
    this.updateWishlistUri = this.baseWishlistUri;
    // this.deleteWishlistUri = this.baseWishlistUri + "/movies";
    this.deleteWishlistUri = this.baseWishlistUri;
    this.imageBaseUri = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    this.tmdbEndpoint = "https://api.themoviedb.org/3/movie/";
    this.movieSearchUri = 'https://api.themoviedb.org/3/search/movie';
    this.apiKeyQueryString = `api_key=${this.apiKey}`;
    //https://api.themoviedb.org/3/movie/popular?api_key=ed7616b341eab536bc2958001630a397&page=1
    //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  }
  getMoviesByType(type: String, page: number = 1): Observable<Array<Movie>> {
    return this.http.get(`${this.tmdbEndpoint}${type}?${this.apiKeyQueryString}&page=${page}`).pipe(
      retry(3),
      map(this.pickMovieResults),
      map(this.transformPosterPath.bind(this))
    );
  }

  transformPosterPath(movies: Array<Movie>): Array<Movie> {
    movies.map(movieTemp => {
      console.log(`Movie:${JSON.stringify(movieTemp)}`);
      console.log(`PosterPath:${this.imageBaseUri}${movieTemp['poster_path']}`);
      movieTemp['poster_path'] = `${this.imageBaseUri}${movieTemp['poster_path']}`;
      return movieTemp;
    });
    return movies;
  }
  pickMovieResults(movies) {
    return movies['results'];
  }
  addMovieToWishList(movie: Movie):Observable<Movie>{
    console.log("addMovieToWishList: ${this.createWishlistUri}",JSON.stringify(movie));
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<Movie>(this.createWishlistUri, movie,{headers:headers}).pipe(retry(3));
  }
  getAllMoviesFromExistingWishList():Observable<Array<Movie>> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<Array<Movie>>(this.getAllWishlistUri,{headers:headers}).pipe(retry(3));
  }
  deleteMovieFromWatchList(movie:Movie):Observable<string>{
    return this.http.delete(`${this.deleteWishlistUri}/${movie.id}`,{responseType:'text'}).pipe(retry(3));
  }
  updateMovieFromWatchList(movie: Movie):Observable<string>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put<string>(`${this.updateWishlistUri}/${movie.id}`,movie,{headers:headers,responseType:'json'}).pipe(retry(3));
  }
  searchByText(searchText:string):Observable<Array<Movie>>{
    let searchUri = `${this.movieSearchUri}?${this.apiKeyQueryString}&language=en-US&page=1&include_adult=false&query=${searchText}`;
    return this.http.get(searchUri).pipe(retry(3),map(this.pickMovieResults),map(this.transformPosterPath.bind(this)));
  }
}
