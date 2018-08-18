import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Movie } from '../../movie';
import { MatDialog, MatSnackBar } from '@angular/material';
import { WatchlistUpdateDialogComponent } from '../watchlist-update-dialog/watchlist-update-dialog.component';
@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input()
  public movie:Movie;
  @Input()
  public inWatchListApi:boolean;
  @Output()
  private addMovie2WatchListEmitterInChild:EventEmitter<Movie>= new EventEmitter();
  @Output()
  private deleteMovieFromWatchListEmitterInChild:EventEmitter<Movie>= new EventEmitter();
  constructor(private dialog:MatDialog,private snackBar:MatSnackBar) {}

  ngOnInit() {

  }
  addToWatchListInChild(){
    this.addMovie2WatchListEmitterInChild.emit(this.movie);
  }
  deleteFromWatchListInChild(){
    this.deleteMovieFromWatchListEmitterInChild.emit(this.movie);
  }
  updateMovieInWatchListInChild(actionType){
    console.log('Opening WatchList Update Dialog..');
    this.dialog.open(WatchlistUpdateDialogComponent,{
      width:'500px',
      data:{obj:this.movie,actionType:actionType}
    }).afterClosed().subscribe(result=>{
      console.log(`Closing WatchList Update Dialog.${result}`);
      this.snackBar.open(`${this.movie.title} Comment Is Updated In Your WatchList.`,'',{duration:2500});
    });
  }
}
