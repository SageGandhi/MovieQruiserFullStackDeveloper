import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TmdbContainerWatchlistComponent } from '../movie/components/tmdb-container-watchlist/tmdb-container-watchlist.component';
import { WatchlistComponent } from '../movie/components/watchlist/watchlist.component';
import { SearchMovieComponent } from '../movie/components/search-movie/search-movie.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';

const movieRoutes: Routes = [
  {
    path: 'movies/popular',
    component: TmdbContainerWatchlistComponent,
    canActivate:[AuthGuardService],
    data: {
      movieType: 'popular'
    }
  },
  {
    path: 'movies/top_rated',
    component: TmdbContainerWatchlistComponent,
    canActivate:[AuthGuardService],
    data: {
      movieType: 'top_rated'
    }
  },
  {
    path: 'movies/watchlist',
    canActivate:[AuthGuardService],
    component: WatchlistComponent
  },
  {
    path: 'movies/searchMovie',
    canActivate:[AuthGuardService],
    component: SearchMovieComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MovieRouterModule { }
