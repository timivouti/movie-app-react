import * as React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import FullPageLoading from "./components/FullPageLoading";
const NewMovies = lazy(() => import("./pages/NewMovies"));
const PopularMovies = lazy(() => import("./pages/PopularMovies"));
const TopMovies = lazy(() => import("./pages/TopMovies"));
const UpcomingMovies = lazy(() => import("./pages/UpcomingMovies"));

const RouterComponent: React.SFC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Suspense fallback={<FullPageLoading />}>
          <Switch>
            <Route exact path="/" component={TopMovies} />
            <Route exact path="/newmovies" component={NewMovies} />
            <Route exact path="/popularmovies" component={PopularMovies} />
            <Route exact path="/upcomingmovies" component={UpcomingMovies} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default RouterComponent;
