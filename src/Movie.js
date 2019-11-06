import React from "react";

export default function Movie(props) {
  return (
    <figure className="moviecover">
      <img src={props.img} alt={`${props.alt} Movie`} />
      <div className="overlay">
        <h1>{props.title}</h1>
      </div>
    </figure>
  );
}
