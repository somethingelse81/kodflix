import React from "react";
import avengersendgame from "./images/avengersendgame.jpeg";
import  blackmirror from "./images/blackmirror.jpg";
import  breakingbad from "./images/breakingbad.jpg";
import  deathnote from "./images/deathnote.jpg";
import  got from "./images/got.jpg";
import  thewalkingdead from "./images/thewalkingdead.jpg";
import  thewire from "./images/thewire.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="moviecoverheader">
        <img src={avengersendgame} alt="avengers end game moie cover" />
      </header>
      <section className="moviecoverrow">
        <figure classname="moviecover"><img src={blackmirror} alt='blackmirror'/></figure>
        <figure classname="moviecover"><img src={breakingbad} alt='breakingbad' /></figure>
        <figure classname="moviecover"><img src={deathnote} alt='deathnote' /></figure>
      </section>
      <section className="moviecoverrow">
        <figure classname="moviecover"><img src={got} alt='got' /></figure>
        <figure classname="moviecover"><img src={thewalkingdead} alt='thewalkingdead' /></figure>
        <figure classname="moviecover"><img src={thewire} alt='thewire' /></figure>
      </section>
    </div>
  );
}

export default App;
