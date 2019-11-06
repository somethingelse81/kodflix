import React from "react";
import avengersendgame from "./images/avengersendgame.jpeg";

export default function MovieHeader() {
  return (
    <header className="moviecoverheader">
      <img src={avengersendgame} alt={`Avengers End Game`} />
    </header>
  );
}
