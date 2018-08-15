import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from '../movie-router/movie-router.module';
import { MaterialModule } from '../material/material.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerWatchlistComponent } from './components/tmdb-container-watchlist/tmdb-container-watchlist.component';
import { WatchlistUpdateDialogComponent } from './components/watchlist-update-dialog/watchlist-update-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
@NgModule({
  imports: [
    CommonModule, HttpClientModule, MovieRouterModule,MaterialModule,FormsModule
  ],
  declarations: [ThumbnailComponent, ContainerComponent, WatchlistComponent, TmdbContainerWatchlistComponent, WatchlistUpdateDialogComponent, SearchMovieComponent],
  exports: [ThumbnailComponent, ContainerComponent, MovieRouterModule,WatchlistComponent,WatchlistUpdateDialogComponent,SearchMovieComponent],
  providers: [TmdbMovieService],
  entryComponents:[WatchlistUpdateDialogComponent]
})
export class MovieModule { }
