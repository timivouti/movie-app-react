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
            <Route
              exact
              path="/"
              component={(props: any) => <TopMovies {...props} />}
            />
            <Route
              exact
              path="/newmovies"
              component={(props: any) => <NewMovies {...props} />}
            />
            <Route
              exact
              path="/popularmovies"
              component={(props: any) => <PopularMovies {...props} />}
            />
            <Route
              exact
              path="/upcomingmovies"
              component={(props: any) => <UpcomingMovies {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default RouterComponent;
