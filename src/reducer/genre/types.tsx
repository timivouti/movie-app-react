export interface Genre {
  id: number;
  name: string;
}

export interface GenreState {
  movieGenres: Genre[];
}

export const LOADING = "LOADING";
export type LOADING = typeof LOADING;

export const FETCH_SUCCESS = "@@genre/FETCH_SUCCESS";
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;

export const FETCH_ERROR = "FETCH_ERROR";
export type FETCH_ERROR = typeof FETCH_ERROR;

interface IGenreAction {
  type: string;
  payload?: Genre[];
}

export type GenreAction = IGenreAction;
