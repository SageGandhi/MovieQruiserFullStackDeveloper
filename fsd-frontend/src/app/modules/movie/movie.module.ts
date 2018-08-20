import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TmdbMovieService } from './service/tmdb-movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from '../movie-router/movie-router.module';
import { MaterialModule } from '../material/material.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerWatchlistComponent } from './components/tmdb-container-watchlist/tmdb-container-watchlist.component';
import { WatchlistUpdateDialogComponent } from './components/watchlist-update-dialog/watchlist-update-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { JwtTokenInterceptor } from '../interceptors/jwt-token-interceptor';
@NgModule({
  imports: [
    CommonModule, HttpClientModule, MovieRouterModule,MaterialModule,FormsModule
  ],
  declarations: [ThumbnailComponent, ContainerComponent, WatchlistComponent, TmdbContainerWatchlistComponent, WatchlistUpdateDialogComponent, SearchMovieComponent],
  exports: [ThumbnailComponent, ContainerComponent, MovieRouterModule,WatchlistComponent,WatchlistUpdateDialogComponent,SearchMovieComponent],
  providers: [TmdbMovieService,{provide:HTTP_INTERCEPTORS,useClass:JwtTokenInterceptor,multi:true}],
  entryComponents:[WatchlistUpdateDialogComponent]
})
export class MovieModule { }
