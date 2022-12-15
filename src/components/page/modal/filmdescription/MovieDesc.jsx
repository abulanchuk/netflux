import React from "react";
import "./MovieDesc.css";
import circle from "../../../../image/circle.svg";

const MovieDesc = (props) => {
    const {id, name, type, image, year, rating, time, description} = props.movie;
    return (
        <div className={"movie-info"}>
            <div>
                <img className={"movie-info__pic"} src={image} alt={"movie-pic"}/>
            </div>


            <div className={"movie-info__detail"}>
                <div className={"movie-info__detail--align"}>
                    <h1 className={"movie-info__detail__name"}>{name}</h1>
                    <div className={"movie-info__detail__circle-with-rating--align"}>
                        <img className={"movie-info__detail__circle"} src={circle} alt="loop"/>
                        <span className={"movie-info__detail__rating"}>{rating}</span>
                    </div>
                </div>
                <div className={"movie-info__detail__yt"}>
                    <span className={"movie-info__detail__yt__year"}>{year} </span>
                    <span className={"movie-info__detail__yt__time"}>{time}min</span>
                </div>
                <span className={"movie-info__detail__description"}>{description}</span>
            </div>

        </div>)
}
export default MovieDesc;