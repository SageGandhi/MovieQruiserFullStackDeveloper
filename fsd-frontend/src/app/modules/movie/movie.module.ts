import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [ThumbnailComponent, PopularMoviesComponent, TopRatedComponent, ContainerComponent],
  exports: [ThumbnailComponent, PopularMoviesComponent, TopRatedComponent,ContainerComponent],
  providers:[TmdbMovieService]
})
export class MovieModule { }
