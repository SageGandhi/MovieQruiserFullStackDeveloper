import { TestBed, inject } from '@angular/core/testing';

import { TmdbMovieService } from './tmdb-movie.service';

describe('TmdbMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbMovieService]
    });
  });

  it('should be created', inject([TmdbMovieService], (service: TmdbMovieService) => {
    expect(service).toBeTruthy();
  }));
});
