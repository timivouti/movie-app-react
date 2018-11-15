export interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface MovieState {
  movies: Movie[];
  loading: boolean;
}

export const LOADING = "LOADING";
export type LOADING = typeof LOADING;

export const FETCH_SUCCESS = "@@movie/FETCH_SUCCESS";
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;

export const FETCH_ERROR = "FETCH_ERROR";
export type FETCH_ERROR = typeof FETCH_ERROR;

interface IMovieAction {
  type: string;
  payload?: Movie[];
}

export type MovieAction = IMovieAction;
