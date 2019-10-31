import React from "react";
import avengersendgame from "./avengersendgame.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="moviecoverheader">
        <img src={avengersendgame} alt="avengers end game moie cover" />
      </header>
      <section className="moviecoverrow">
        <figure classname="moviecover">Black Mirror</figure>
        <figure classname="moviecover">breakingbad</figure>
        <figure classname="moviecover">deathnote</figure>
      </section>
      <section className="moviecoverrow">
        <figure classname="moviecover">Game Of Thrones</figure>
        <figure classname="moviecover">The Walking Dead</figure>
        <figure classname="moviecover">The Wire</figure>
      </section>
    </div>
  );
}

export default App;
