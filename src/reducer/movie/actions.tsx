import { Dispatch } from "redux";
import {
  MovieAction,
  Movie,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOADING
} from "./types";

const API_KEY = "?api_key=00297accea2395b7c2d46ca8feb72e99";
const ROOT_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=en-US";

export const fetchMoviesAsync = (): ((
  dispatch: Dispatch<MovieAction>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieAction>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}movie/top_rated${API_KEY}${LANGUAGE}&page=1`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};
