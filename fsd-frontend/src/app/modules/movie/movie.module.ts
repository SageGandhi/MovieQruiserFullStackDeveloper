import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from '../movie-router/movie-router.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, MovieRouterModule,MaterialModule
  ],
  declarations: [ThumbnailComponent, ContainerComponent],
  exports: [ThumbnailComponent, ContainerComponent, MovieRouterModule],
  providers: [TmdbMovieService]
})
export class MovieModule { }
