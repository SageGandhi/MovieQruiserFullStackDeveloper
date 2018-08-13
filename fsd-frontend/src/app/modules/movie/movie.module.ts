import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [ThumbnailComponent],
  exports: [ThumbnailComponent],
  providers:[TmdbMovieService]
})
export class MovieModule { }
