import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { MaterialModule } from '../../../material/material.module';
import { ThumbnailComponent } from 'src/app/modules/movie/components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from 'src/app/modules/movie/movie';
import { TmdbContainerWatchlistComponent } from './tmdb-container-watchlist.component';
import { ContainerComponent } from '../container/container.component';


describe('TmdbContainerWatchlistComponent:', () => {
  let component: TmdbContainerWatchlistComponent;
  let fixture: ComponentFixture<TmdbContainerWatchlistComponent>;
  let service: TmdbMovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent,TmdbContainerWatchlistComponent, ThumbnailComponent],
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      providers: [TmdbMovieService]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbContainerWatchlistComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TmdbMovieService);
    let movieAvengers: Array<Movie> = [{
      "id": 299536,
      "vote_count": 6836,
      "vote_average": 8.3,
      "title": "Avengers: Infinity War",
      "popularity": 309.417,
      "poster_path": "",
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "release_date": "2018-04-25"
    }];
    component.movies = movieAvengers;
  });

  it('TmdbContainerWatchlistComponent Is Truthy', () => {
    expect(component).toBeTruthy();
  });
})
