import {
  createStyles,
  Grid,
  Divider,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import FullPageLoading from "../components/FullPageLoading";
import { StoreState } from "../reducer/";
import {
  fetchGenresAsync,
  fetchSearchMoviesAsync,
  MovieActions
} from "../reducer/movie/actions";
import { Genre, Movie } from "../reducer/movie/types";

// Component props extends material-ui props

interface ISearchMoviesProps extends WithStyles<typeof styles> {
  genres: Genre[];
  loading: boolean;
  movies: Movie[];
}

// Redux dispatch props

interface ISearchMoviesDispatchProps {
  fetchMovies: (value: string) => Promise<void>;
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

// Combining Component and Redux dispatch props with React Router props

type SearchMoviesProps = ISearchMoviesProps &
  ISearchMoviesDispatchProps &
  RouteComponentProps<any>;

class SearchMovies extends React.Component<SearchMoviesProps> {
  constructor(props: SearchMoviesProps) {
    super(props);
  }

  public componentDidMount() {
    this.fetch(this.props.match.params.value);
  }

  // checks if the search value, movies or genres are different from before
  // if one of them is different updates component

  public shouldComponentUpdate(nextProps: any) {
    if (this.props.match.params.value != nextProps.match.params.value) {
      this.fetch(nextProps.match.params.value);
    }
    return (
      this.props.match.params.value != nextProps.match.params.value ||
      this.props.movies != nextProps.movies ||
      this.props.genres != nextProps.genres
    );
  }

  public render() {
    return (
      <div className={this.props.classes.container}>
        {this.props.loading && <FullPageLoading />}
        <Grid item={true} xs={12} style={{ marginBottom: 20 }}>
          <Typography
            variant="title"
            style={{ textAlign: "center", lineHeight: "3em" }}
          >
            Found {this.props.movies.length} movies
          </Typography>
          <Divider />
        </Grid>
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

  // fetches movies if there are search value and its length is > 0

  private fetch = (value?: string) => {
    if (value && value.length > 0) {
      this.props.fetchMovies(value).then(() => this.props.fetchGenres());
    } else {
      this.props.history.push("/topmovies");
    }
  };
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
    fetchMovies: (value: string) => dispatch(fetchSearchMoviesAsync(value))
  };
};

// Combining redux state and functions to component

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchMovies)
);
