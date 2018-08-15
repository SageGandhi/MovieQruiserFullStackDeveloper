import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieModule } from './modules/movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';

const movieRoutes: Routes = [
  {
    path: '',
    redirectTo: '/movies/popular',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MovieModule,
    MaterialModule,
    RouterModule.forRoot(movieRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
