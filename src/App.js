import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Navigate from "./components/Navigate/Navigate";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.js"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.js")
);

function App() {
  return (
    <div className="App">
      <Navigate />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
