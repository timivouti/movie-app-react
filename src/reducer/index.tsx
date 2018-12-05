import { combineReducers } from "redux";
import MovieReducer from "./movie";
import { MovieState } from "./movie/types";

// Declaring redux state with only movie object

export interface StoreState {
  movie: MovieState;
}

// Exporting reducer with only movie reducer

export default combineReducers<StoreState>({
  movie: MovieReducer
});
