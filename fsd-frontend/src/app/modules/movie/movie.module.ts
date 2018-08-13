import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThumbnailComponent, ThumbnailComponent],
  exports: [ThumbnailComponent]
})
export class MovieModule { }
