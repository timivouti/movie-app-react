import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TopMovies from "./pages/TopMovies";

const RouterComponent: React.SFC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={TopMovies} />
      </div>
    </Router>
  );
};

export default RouterComponent;
