import React from 'react';

function MovieInfo(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: '0 auto' }}
      />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
      <h3>imdbRating: {props.imdbRating}</h3>
    </div>
  );
}

export default MovieInfo;