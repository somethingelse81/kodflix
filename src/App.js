import React from "react";
import avengersendgame from "./images/avengersendgame.jpeg";
import blackmirror from "./images/blackmirror.jpg";
import breakingbad from "./images/breakingbad.jpg";
import deathnote from "./images/deathnote.jpg";
import got from "./images/got.jpg";
import thewalkingdead from "./images/thewalkingdead.jpg";
import thewire from "./images/thewire.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="moviecoverheader">
        <img src={avengersendgame} alt="avengers end game moie cover" />
      </header>
      <section className="moviecoverrow">
        <figure className="moviecover">
          <img src={blackmirror} alt="blackmirror" />
          <div className="overlay">
            <h1>Black Mirror</h1>
          </div>
        </figure>
        <figure className="moviecover">
          <img src={breakingbad} alt="breakingbad" />
          <div className="overlay">
            <h1>Breaking Bad</h1>
          </div>
        </figure>
        <figure className="moviecover">
          <img src={deathnote} alt="deathnote" />
          <div className="overlay">
            <h1>Death Note</h1>
          </div>
        </figure>
      </section>
      <section className="moviecoverrow">
        <figure className="moviecover">
          <img src={got} alt="got" />
          <div className="overlay">
            <h1>Game Of Thrones</h1>
          </div>
        </figure>
        <figure className="moviecover">
          <img src={thewalkingdead} alt="thewalkingdead" />
          <div className="overlay">
            <h1>The Walking Dead</h1>
          </div>
        </figure>
        <figure className="moviecover">
          <img src={thewire} alt="thewire" />
          <div className="overlay">
            <h1>The Wire</h1>
          </div>
        </figure>
      </section>
    </div>
  );
}

export default App;
