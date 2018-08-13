import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [ThumbnailComponent, PopularMoviesComponent],
  exports: [ThumbnailComponent],
  providers:[TmdbMovieService]
})
export class MovieModule { }
