import React from "react";
import blackmirror from "./images/blackmirror.jpg";
import breakingbad from "./images/breakingbad.jpg";
import deathnote from "./images/deathnote.jpg";
import got from "./images/got.jpg";
import thewalkingdead from "./images/thewalkingdead.jpg";
import thewire from "./images/thewire.jpg";
import Movie from "./Movie";

export default function Gallery() {
  return (
    <>
      <section className="moviecoverrow">
        <Movie img={blackmirror} alt={`Black Mirror`} title={`Black Mirror`} />
        <Movie img={breakingbad} alt={`Breaking Bad`} title={`Breaking Bad`} />
        <Movie img={deathnote} alt={`Death Note`} title={`Death Note`} />
      </section>
      <section className="moviecoverrow">
        <Movie img={got} alt={`Game Of Thrones`} title={`Game Of Thrones`} />
        <Movie img={thewalkingdead} alt={`The Walking Dead`} title={`The Walking Dead`} />
        <Movie img={thewire} alt={`The Wire`} title={`The Wire`} />
      </section>
    </>
  );
}
