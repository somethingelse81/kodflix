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
    <div className="galleryContainer">
      <section className="moviecoverrow">
        <Movie id="blackmirror" img={blackmirror} alt={`Black Mirror`} title={`Black Mirror`} />
        <Movie id ="breakingbad" img={breakingbad} alt={`Breaking Bad`} title={`Breaking Bad`} />
        <Movie id ="deathnote" img={deathnote} alt={`Death Note`} title={`Death Note`} />
      </section>
      <section className="moviecoverrow">
        <Movie id ="gameofthrones" img={got} alt={`Game Of Thrones`} title={`Game Of Thrones`} />
        <Movie id = "thewalkingdead" img={thewalkingdead} alt={`The Walking Dead`} title={`The Walking Dead`} />
        <Movie id = "thewire" img={thewire} alt={`The Wire`} title={`The Wire`} />
      </section>
    </div>
  );
}
