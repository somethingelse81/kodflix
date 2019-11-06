import React from 'react';

export default function MovieHeader(props) {
    return (
        <header className="moviecoverheader">
        <img src={props.img} alt={`${props.alt} Movie Cover`} />
      </header>
    );
}