import { Dispatch } from "redux";
import {
  Genre,
  GenreAction,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOADING
} from "./types";

const API_KEY = "?api_key=00297accea2395b7c2d46ca8feb72e99";
const ROOT_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=en-US";

export const fetchGenresAsync = (): ((
  dispatch: Dispatch<GenreAction>
) => Promise<void>) => {
  return async (dispatch: Dispatch<GenreAction>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}genre/movie/list${API_KEY}${LANGUAGE}`
      );
      if (result.ok) {
        const res = await result.json();
        const genres = res.genres as Genre[];
        dispatch({ type: FETCH_SUCCESS, payload: genres });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};
