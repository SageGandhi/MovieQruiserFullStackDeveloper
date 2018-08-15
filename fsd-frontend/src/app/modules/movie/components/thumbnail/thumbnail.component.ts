import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input()
  private movie:Movie;

  constructor() {}

  ngOnInit() {

  }
}
