import {
  Grid,
  CircularProgress,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import MovieCard from "../components/MovieCard";
import { StoreState } from "../reducer/";
import { fetchMoviesAsync } from "../reducer/movie/actions";
import { Movie, MovieAction } from "../reducer/movie/types";
import { fetchGenresAsync } from "../reducer/genre/actions";
import { Genre, GenreAction } from "../reducer/genre/types";

interface ITopMoviesProps extends WithStyles<typeof styles> {
  genres: Genre[];
  loading: boolean;
  movies: Movie[];
}

interface ITopMoviesDispatchProps {
  fetchMovies: () => Promise<void>;
  fetchGenres: () => void;
}

const styles = {
  container: {
    margin: "8px"
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15
  }
};

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
        {this.props.loading && (
          <div className={this.props.classes.loadingContainer}>
            <CircularProgress color="secondary" />
          </div>
        )}
        <Grid container={true} spacing={16}>
          {this.props.movies &&
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

const mapStateToProps = (state: StoreState) => {
  return {
    genres: state.genre.movieGenres,
    loading: state.movie.loading,
    movies: state.movie.movies
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreState, any, MovieAction | GenreAction>
) => {
  return {
    fetchGenres: () => dispatch(fetchGenresAsync()),
    fetchMovies: () => dispatch(fetchMoviesAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(TopMovies)
);
