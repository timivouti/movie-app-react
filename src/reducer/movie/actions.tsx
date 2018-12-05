import { Dispatch } from "redux";
import { ActionsUnion, createAction } from "../../utils/actionUtils";
import {
  Genre,
  Movie,
  FETCH_GENRE_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_ERROR,
  LOADING
} from "./types";

const API_KEY = "?api_key=00297accea2395b7c2d46ca8feb72e99";
const ROOT_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=en-US";

// Redux action typing using createAction-function

const Actions = {
  fetchError: () => createAction(FETCH_ERROR),
  fetchMovieSuccess: (movies: Movie[]) =>
    createAction(FETCH_MOVIE_SUCCESS, movies),
  fetchGenreSuccess: (genres: Genre[]) =>
    createAction(FETCH_GENRE_SUCCESS, genres),
  loading: () => createAction(LOADING)
};

// Combining all action types as MovieActions

export type MovieActions = ActionsUnion<typeof Actions>;

// Fetch new movies function

export const fetchNewMoviesAsync = (): ((
  dispatch: Dispatch<MovieActions>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}movie/now_playing${API_KEY}${LANGUAGE}&page=1`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

// Fetch popular movies function

export const fetchPopularMoviesAsync = (): ((
  dispatch: Dispatch<MovieActions>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}movie/popular${API_KEY}${LANGUAGE}&page=1`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

// Fetch top movies function

export const fetchTopMoviesAsync = (): ((
  dispatch: Dispatch<MovieActions>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}movie/top_rated${API_KEY}${LANGUAGE}&page=1`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

// Fetch upcoming movies function

export const fetchUpcomingMoviesAsync = (): ((
  dispatch: Dispatch<MovieActions>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}movie/upcoming${API_KEY}${LANGUAGE}&page=1`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

// Fetch genres function

export const fetchGenresAsync = (): ((
  dispatch: Dispatch<MovieActions>
) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}genre/movie/list${API_KEY}${LANGUAGE}`
      );
      if (result.ok) {
        const res = await result.json();
        const genres = res.genres as Genre[];
        dispatch({ type: FETCH_GENRE_SUCCESS, payload: genres });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

// Fetch movies with search value

export const fetchSearchMoviesAsync = (
  value: string
): ((dispatch: Dispatch<MovieActions>) => Promise<void>) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    dispatch({ type: LOADING });
    try {
      const result = await fetch(
        `${ROOT_URL}search/movie${API_KEY}${LANGUAGE}&query=${value}`
      );
      if (result.ok) {
        const res = await result.json();
        const movies = res.results as Movie[];
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: movies });
      } else {
        dispatch({ type: FETCH_ERROR });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};
