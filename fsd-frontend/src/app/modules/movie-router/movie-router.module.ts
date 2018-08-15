import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TmdbContainerWatchlistComponent } from '../movie/components/tmdb-container-watchlist/tmdb-container-watchlist.component';
import { WatchlistComponent } from '../movie/components/watchlist/watchlist.component';

const movieRoutes: Routes = [
  {
    path: 'movies/popular',
    component: TmdbContainerWatchlistComponent,
    data:{
      movieType:'popular'
    }
  },
  {
    path: 'movies/top_rated',
    component: TmdbContainerWatchlistComponent,
    data:{
      movieType:'top_rated'
    }
  },
  {
    path: 'movies/watchlist',
    component: WatchlistComponent
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
