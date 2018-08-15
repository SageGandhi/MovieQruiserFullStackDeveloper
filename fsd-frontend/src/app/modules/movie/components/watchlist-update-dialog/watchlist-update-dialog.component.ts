import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'movie-watchlist-update-dialog',
  templateUrl: './watchlist-update-dialog.component.html',
  styleUrls: ['./watchlist-update-dialog.component.css']
})
export class WatchlistUpdateDialogComponent implements OnInit {
  private movie:Movie;
  private comments:string;

  constructor(private snackBar:MatSnackBar,
    private movieService:TmdbMovieService,
    public dialogRef:MatDialogRef<WatchlistUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit() {
    console.log(this.data);
    this.movie=this.data.obj;
    this.comments=this.movie.comment;
  }
  onNoClick(){
    this.dialogRef.close('No Action Performed.');
  }
  updateMovieComment(){
    this.movie.comment=this.comments;//Update
    console.log(this.movie.comment);
    this.movieService.updateMovieFromWatchList(this.movie).subscribe(
      resp=>this.dialogRef.close(`${this.movie.title} Comment Has Been Updated'`),
      error=>this.dialogRef.close(`Error ${error}`)
    );
  }
}
