import { combineReducers } from "redux";
import MovieReducer from "./movie";
import GenreReducer from "./genre";
import { MovieState } from "./movie/types";
import { GenreState } from "./genre/types";

export interface StoreState {
  movie: MovieState;
  genre: GenreState;
}

export default combineReducers<StoreState>({
  genre: GenreReducer,
  movie: MovieReducer
});
