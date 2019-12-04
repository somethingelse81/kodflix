import React from "react";
import Movie from "./Movie";
import getMovies from "./movies-get";

export default function Gallery() {
  return (
    <div className="galleryContainer">
      <section className="moviecoverrow">
        {getMovies().map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            img={movie.img}
            alt={movie.alt}
            title={movie.title}
          />
        ))}
      </section>
    </div>
  );
}