import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import StarIcon from "@material-ui/icons/Star";
import * as React from "react";
import { Genre } from "../reducer/movie/types";
import { dateParser } from "../utils/dateUtils";

interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

interface MovieProps extends WithStyles<typeof styles> {
  movie: Movie;
  genres: Genre[];
}

const styles = createStyles({
  starContent: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row" as "row",
    height: "24px"
  },
  media: {}
});

class MovieCard extends React.Component<MovieProps> {
  constructor(props: MovieProps) {
    super(props);
  }

  public render() {
    return (
      <Grid xs={12} sm={6} item={true}>
        <Card>
          <Grid container={true}>
            <Grid xs={12} md={6} item={true}>
              <CardMedia
                className={this.props.classes.media}
                component="img"
                image={`http://image.tmdb.org/t/p/w185${
                  this.props.movie.poster_path
                }`}
                title={this.props.movie.title}
              />
            </Grid>
            <Grid xs={12} md={4} item={true}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.movie.title}
                </Typography>
                <Typography component="p">
                  {this.props.movie.overview}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography component="p">
                  Genres: {this.findGenre(this.props.movie.genre_ids)}
                </Typography>
                <Typography component="p">
                  Language: {this.props.movie.original_language}
                </Typography>
                <Typography component="p">
                  Released: {dateParser(this.props.movie.release_date)}
                </Typography>
              </CardContent>
            </Grid>
            <Grid xs={12} md={2} item={true}>
              <CardContent className={this.props.classes.starContent}>
                <StarIcon />
                <Typography component="p">
                  {this.props.movie.vote_average}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }

  private findGenre(ids: number[]): string {
    const foundGenres: string[] = [];
    ids.map(id => {
      this.props.genres.forEach(genre => {
        if (genre.id === id) {
          foundGenres.push(genre.name);
        }
      });
    });
    return foundGenres.join(", ");
  }
}

export default withStyles(styles)(MovieCard);
