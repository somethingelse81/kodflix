import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <Link to="details" className="moviecover">
      <img src={props.img} alt={`${props.alt} Movie`} />
      <div className="overlay">
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
}
