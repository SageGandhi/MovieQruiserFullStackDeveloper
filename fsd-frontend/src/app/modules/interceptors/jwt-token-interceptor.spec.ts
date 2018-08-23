import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/service/authentication.service';
import { JwtTokenInterceptor } from './jwt-token-interceptor';
import { User } from '../authentication/user';
import { MockBackend } from "@angular/http/testing";
import { TmdbMovieService } from '../movie/service/tmdb-movie.service';
import { MovieModule } from '../movie/movie.module';
import { Movie } from '../movie/movie';


describe(`AuthHttpInterceptor:`, () => {
  let service: TmdbMovieService;
  let httpMock: HttpTestingController;
  let movie: Movie = {
    "vote_count": 6836,
    "id": 299536,
    "vote_average": 8.3,
    "title": "Avengers: Infinity War",
    "popularity": 309.417,
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "release_date": "2018-04-25",
    "comment": null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MovieModule],
      providers: [
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtTokenInterceptor,
          multi: true,
        },
        TmdbMovieService
      ],
    });

    service = TestBed.get(TmdbMovieService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('Should Add An Authorization Header', inject([HttpClient, HttpTestingController],
    (http: HttpClient, httpMock: HttpTestingController) => {
      service.addMovieToWishList(movie).subscribe(response => { });
      const req = httpMock.expectOne(request => request.url === 'http://localhost:8080/api/v1/movie');

      expect(req.request.headers.has('Authorization'));
      expect(req.request.params.has('userId'));
      expect(req.request.method).toEqual('POST');
    }));

  it('Should Add An UserId Request Param', inject([HttpClient, HttpTestingController],
    (http: HttpClient, httpMock: HttpTestingController) => {
      service.addMovieToWishList(movie).subscribe(response => { });
      const req = httpMock.expectOne(request => request.url === 'http://localhost:8080/api/v1/movie');

      expect(req.request.params.has('userId'));
      expect(req.request.method).toEqual('POST');
    }));
});
