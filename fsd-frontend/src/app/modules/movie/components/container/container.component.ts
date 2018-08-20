import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input()
  public movies:Array<Movie>;
  @Input()
  private inWatchListApi:boolean;
  constructor(private movieService:TmdbMovieService,private snackBar:MatSnackBar) {

  }

  ngOnInit() {

  }
  addToWatchListInParent(movie){
    this.movieService.addMovieToWishList(movie)
      .subscribe((movie)=>{
        console.log(`Added To My WatchList:${JSON.stringify(movie)}`);
        this.snackBar.open(`${movie.title} Added To Your WatchList.`,'',{duration:2500});
      },(err)=>{
        if (err.status === 409) {
          this.snackBar.open(`${movie.title} Already Added To Your WatchList.You Can Not Add Twice.`,'',{duration:2500});
        }
      });
  }
  deleteFromWatchListInParent(movie){
    this.movies=this.movies.filter(item=>item.id!==movie.id);
    this.movieService.deleteMovieFromWatchList(movie).subscribe((text)=>{
      console.log(`Deleted From My WatchList:${JSON.stringify(movie)}`);
      this.snackBar.open(`${movie.title} Removed From Your WatchList.`,'',{duration:2500});
    });
  }
}
