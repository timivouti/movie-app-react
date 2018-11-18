import { MovieActions } from "./actions";
import {
  MovieState,
  FETCH_GENRE_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_ERROR,
  LOADING
} from "./types";

const INITIAL_STATE: MovieState = {
  movies: [],
  loading: false,
  genres: []
};

export default (
  state: MovieState = INITIAL_STATE,
  action: MovieActions
): MovieState => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_GENRE_SUCCESS:
      return { ...state, genres: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
