import { MovieImage } from "./movie-image";

export interface Movie {
  vote_count: number;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  overview: string;
  release_date: string;
  id:number;
  //Add Backdorp Based On Screen Size Later
  //backdrops:Array<MovieImage>;
}
