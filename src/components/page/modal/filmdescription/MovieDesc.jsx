import React from "react";
import "./MovieDesc.css";
import circle from "../../../../image/circle.svg";
import { Routes, Route, useParams } from 'react-router-dom';

const MovieDesc = (props) => {
    const { title, genres, poster_path, release_date, vote_average, runtime, overview} = props.movie|| {};
    let { id } = useParams();
    console.log(id);
    return (
        <div className={"movie-description"}>
            <div>
                <img className={"movie-description__pic"} src={poster_path} alt={"movie-pic"}/>
            </div>


            <div className={"movie-description__detail"}>
                <div className={"movie-description__detail--align"}>
                    <h1 className={"movie-description__detail__name"}>{title}</h1>
                    <div className={"movie-description__detail__circle-with-rating--align"}>
                        <img className={"movie-description__detail__circle"} src={circle} alt="loop"/>
                        <span className={"movie-description__detail__rating"}>{vote_average}</span>
                    </div>
                </div>
                <div className={"movie-description__detail__yt"}>
                    <span className={"movie-description__detail__yt__year"}>{new Date(release_date).getFullYear()} </span>
                    <span className={"movie-description__detail__yt__time"}>{runtime}min</span>
                </div>
                <span className={"movie-description__detail__description"}>{overview}</span>
            </div>

        </div>)
}
export default MovieDesc;