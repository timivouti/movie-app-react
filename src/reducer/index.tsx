import { combineReducers } from "redux";
import MovieReducer from "./movie";
import { MovieState } from "./movie/types";

export interface StoreState {
  movie: MovieState;
}

export default combineReducers<StoreState>({
  movie: MovieReducer
});
