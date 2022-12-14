import React from "react";
import "./MovieDesc.css";

const MovieDesc = (props) => {
    const {id, name, type, image, year, rating, time, description} = props.movie;
    return (<div>
        <h1>{name}</h1>

    </div>)
}
export default MovieDesc;