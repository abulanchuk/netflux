import Dots from "./Dots";
import React from "react";
import "./Films.css";
import SortingGenre from "./SortingGenre";
import {useSelector} from "react-redux";


const Films = ({setMovie}) => {

    let listOfMovies = useSelector(state => state.movies.currentMovies);
    if (listOfMovies === undefined) {
        listOfMovies = [];
    }
    console.log("Data", listOfMovies);

    if (listOfMovies.length === 0) {
        return (
            <div className={"no-films__movie-not-found"}>
                <SortingGenre/>
                <div className={"movie-not-found"}>No Movie Found</div>
            </div>
        )
    }

    return (
        <div>
            <div className={"films"}>
                <SortingGenre/>
                <div className={"films__movie-counter"}>
                    <div className={"films__digit-counter--counter"}>
                        {listOfMovies.length}</div>
                    <div>&nbsp;movies found</div>
                </div>
                <div className={"films__movie-container"}>
                    {listOfMovies.map(movie => {
                        return <div className={"films__movie-container__cell"}>
                            <Dots/>
                            <div onClick={ () => setMovie(movie)}>
                            <img className={"films__movie-container__cell__image-movie"} src={movie.poster_path}
                                 alt="movie-img"/></div>
                            <span className={"films__movie-container__cell__description-movie"}>
                                <span className={"films__movie-container__cell__movie-name"}>{movie.title}</span>
                                <span className={"films__movie-container__cell__movie-year"}>{new Date(movie.release_date).getFullYear()}</span>
                            </span>

                            <span className={"films__movie-container__cell__movie-type"}>{movie.genres}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Films;