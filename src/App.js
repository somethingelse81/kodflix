import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Details";
import MovieHeader from "./MovieHeader";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={MovieHeader} />
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:details' component={Details} />
      </div>
    </Router>
  );
}
export default App;
