// Declaring movie interface

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

// Declaring genre interface

export interface Genre {
  id: number;
  name: string;
}

// Declaring Movie State interface

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  genres: Genre[];
}

export const LOADING = "LOADING";
export type LOADING = typeof LOADING;

export const FETCH_MOVIE_SUCCESS = "@@movie/FETCH_MOVIE_SUCCESS";
export type FETCH_MOVIE_SUCCESS = typeof FETCH_MOVIE_SUCCESS;

export const FETCH_GENRE_SUCCESS = "@@movie/FETCH_GENRE_SUCCESS";
export type FETCH_GENRE_SUCCESS = typeof FETCH_GENRE_SUCCESS;

export const FETCH_ERROR = "FETCH_ERROR";
export type FETCH_ERROR = typeof FETCH_ERROR;
