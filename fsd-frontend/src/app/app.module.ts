import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HelloAngularComponent } from './hello-angular/hello-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    // HelloAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
