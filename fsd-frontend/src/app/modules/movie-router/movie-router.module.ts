import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../movie/components/container/container.component';
const movieRoutes: Routes = [
  {
    path: 'movies/popular',
    component: ContainerComponent,
    data:{
      movieType:'popular'
    }
  },
  {
    path: 'movies/top_rated',
    component: ContainerComponent,
    data:{
      movieType:'top_rated'
    }
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
