import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Movie/:name" component={Movie} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
