import {
  MovieAction,
  MovieState,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOADING
} from "./types";

import { FETCH_SUCCESS as FETCH_GENRE_SUCCESS } from "../genre/types";

const INITIAL_STATE: MovieState = {
  movies: [],
  loading: false
};

export default (
  state: MovieState = INITIAL_STATE,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, movies: action.payload!, loading: false };
    case FETCH_GENRE_SUCCESS:
      return { ...state, loading: false };
    case FETCH_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
