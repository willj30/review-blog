import React from "react";

function MovieInfo(props) {
    return (
        <><h3>Director(s): {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Released: {props.released}</h3>
        <h3>imdbRating: {props.imdbRating}</h3>
        <h3>imdbID: {props.imdbID}</h3>
        </>
    )
}

export default MovieInfo;