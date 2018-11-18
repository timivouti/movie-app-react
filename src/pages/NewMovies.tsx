import { createStyles, Grid, withStyles, WithStyles } from "@material-ui/core/";
import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import MovieCard from "../components/MovieCard";
import FullPageLoading from "../components/FullPageLoading";
import { StoreState } from "../reducer/";
import {
  fetchGenresAsync,
  fetchNewMoviesAsync,
  MovieActions
} from "../reducer/movie/actions";
import { Genre, Movie } from "../reducer/movie/types";

interface INewMoviesProps extends WithStyles<typeof styles> {
  genres: Genre[];
  loading: boolean;
  movies: Movie[];
}

interface INewMoviesDispatchProps {
  fetchMovies: () => Promise<void>;
  fetchGenres: () => void;
}

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

type NewMoviesProps = INewMoviesProps & INewMoviesDispatchProps;

class NewMovies extends React.Component<NewMoviesProps> {
  constructor(props: NewMoviesProps) {
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

const mapStateToProps = (state: StoreState) => {
  return {
    genres: state.movie.genres,
    loading: state.movie.loading,
    movies: state.movie.movies
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreState, any, MovieActions>
) => {
  return {
    fetchGenres: () => dispatch(fetchGenresAsync()),
    fetchMovies: () => dispatch(fetchNewMoviesAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(NewMovies)
);
