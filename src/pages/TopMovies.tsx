import { createStyles, Grid, withStyles, WithStyles } from "@material-ui/core/";
import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import MovieCard from "../components/MovieCard";
import FullPageLoading from "../components/FullPageLoading";
import { StoreState } from "../reducer/";
import {
  fetchGenresAsync,
  fetchTopMoviesAsync,
  MovieActions
} from "../reducer/movie/actions";
import { Genre, Movie } from "../reducer/movie/types";

// Component props extends material-ui style props

interface ITopMoviesProps extends WithStyles<typeof styles> {
  genres: Genre[];
  loading: boolean;
  movies: Movie[];
}

// Redux dispatch props

interface ITopMoviesDispatchProps {
  fetchMovies: () => Promise<void>;
  fetchGenres: () => void;
}

// material-ui styling

const styles = createStyles({
  container: {
    margin: "8px"
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15
  }
});

// Combines Component props and Redux Dispatch props

type TopMoviesProps = ITopMoviesProps & ITopMoviesDispatchProps;

class TopMovies extends React.Component<TopMoviesProps> {
  constructor(props: TopMoviesProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.fetchMovies().then(() => this.props.fetchGenres());
  }

  public render() {
    return (
      <div className={this.props.classes.container}>
        {this.props.loading && <FullPageLoading />}
        <Grid container={true} spacing={16}>
          {!this.props.loading &&
            this.props.movies &&
            this.props.movies.length > 0 &&
            this.props.genres &&
            this.props.genres.length > 0 &&
            this.props.movies.map((movie, i) => (
              <MovieCard key={i} movie={movie} genres={this.props.genres} />
            ))}
        </Grid>
      </div>
    );
  }
}

// Redux state

const mapStateToProps = (state: StoreState) => {
  return {
    genres: state.movie.genres,
    loading: state.movie.loading,
    movies: state.movie.movies
  };
};

// Redux functions

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreState, any, MovieActions>
) => {
  return {
    fetchGenres: () => dispatch(fetchGenresAsync()),
    fetchMovies: () => dispatch(fetchTopMoviesAsync())
  };
};

// Combining redux state and functions to component

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(TopMovies)
);
