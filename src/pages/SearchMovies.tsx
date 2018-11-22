import { createStyles, Grid, withStyles, WithStyles } from "@material-ui/core/";
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

interface ISearchMoviesProps extends WithStyles<typeof styles> {
  genres: Genre[];
  loading: boolean;
  movies: Movie[];
}

interface ISearchMoviesDispatchProps {
  fetchMovies: (value: string) => Promise<void>;
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
    console.log(this.props.match.params);
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

  private fetch = (value?: string) => {
    if (value && value.length > 0) {
      this.props.fetchMovies(value).then(() => this.props.fetchGenres());
    } else {
      this.props.history.push("/topmovies");
    }
  };
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
    fetchMovies: (value: string) => dispatch(fetchSearchMoviesAsync(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchMovies)
);
