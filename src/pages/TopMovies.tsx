import { Grid, withStyles, WithStyles } from "@material-ui/core/";
import * as React from "react";
import MovieCard from "../components/MovieCard";

const movie = {
  vote_count: 8615,
  id: 238,
  video: false,
  vote_average: 8.6,
  title: "The Godfather",
  popularity: 26.853,
  poster_path: "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  original_language: "en",
  original_title: "The Godfather",
  genre_ids: [18, 80],
  backdrop_path: "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
  adult: false,
  overview:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  release_date: "1972-03-14"
};

const movieTwo = {
  vote_count: 6009,
  id: 637,
  video: false,
  vote_average: 8.4,
  title: "Life Is Beautiful",
  popularity: 14.09,
  poster_path: "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
  original_language: "it",
  original_title: "La vita è bella",
  genre_ids: [35, 18],
  backdrop_path: "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
  adult: false,
  overview:
    "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
  release_date: "1997-12-20"
};

const movieThree = {
  vote_count: 12890,
  id: 680,
  video: false,
  vote_average: 8.4,
  title: "Pulp Fiction",
  popularity: 24.137,
  poster_path: "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  original_language: "en",
  original_title: "Pulp Fiction",
  genre_ids: [53, 80],
  backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
  adult: false,
  overview:
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  release_date: "1994-09-10"
};

const movieFour = {
  vote_count: 16517,
  id: 155,
  video: false,
  vote_average: 8.4,
  title: "The Dark Knight",
  popularity: 31.98,
  poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  original_language: "en",
  original_title: "The Dark Knight",
  genre_ids: [18, 28, 80, 53],
  backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
  adult: false,
  overview:
    "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
  release_date: "2008-07-16"
};

interface TopMoviesProps extends WithStyles<typeof styles> {
  classes: any;
}

const styles = {
  container: {
    margin: "8px"
  }
};

class TopMovies extends React.Component<TopMoviesProps> {
  constructor(props: TopMoviesProps) {
    super(props);
  }

  public render() {
    return (
      <div className={this.props.classes.container}>
        <Grid container={true} spacing={16}>
          <MovieCard movie={movie} />
          <MovieCard movie={movieTwo} />
          <MovieCard movie={movieThree} />
          <MovieCard movie={movieFour} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TopMovies);
