import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieModule } from './modules/movie/movie.module';
import { MaterialModule } from './modules/material/material.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

const movieRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    AuthenticationModule,
    RouterModule.forRoot(movieRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
