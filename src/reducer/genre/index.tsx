import { GenreAction, GenreState, FETCH_SUCCESS } from "./types";

const INITIAL_STATE: GenreState = {
  movieGenres: []
};

export default (
  state: GenreState = INITIAL_STATE,
  action: GenreAction
): GenreState => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, movieGenres: action.payload! };
    default:
      return state;
  }
};
