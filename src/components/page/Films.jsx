import dataMocks from "../../mocks/MOCK_DATA.json";
import Dots from "./Dots";
import React from "react";
import "./Films.css";
import SortingGenre from "./SortingGenre";


const Films = ({setMovie}) => {
    if (dataMocks.length === 0) {
        return (
            <div className={"no-films"}>
                <SortingGenre/>
                <div className={"no-films__movie-not-found"}>No Movie Found</div>
            </div>
        )
    }

    return (
        <div>
            <div className={"films"}>
                <SortingGenre/>
                <div className={"films__movie-counter"}>
                    <div className={"films__digit-counter--counter"}>
                        {dataMocks.length}</div>
                    <div>&nbsp;movies found</div>
                </div>
                <div className={"films__movie-container"}>
                    {dataMocks.map(movie => {
                        return <div className={"films__movie-container__cell"}
                                    >
                            <Dots/>
                            <div onClick={ () => setMovie(movie)}>
                            <img className={"films__movie-container__cell__image-movie"} src={movie.image}
                                 alt="movie-img"/></div>
                            <span className={"films__movie-container__cell__description-movie"}>
                                <span className={"films__movie-container__cell__movie-name"}>{movie.name}</span>
                                <span className={"films__movie-container__cell__movie-year"}>{movie.year}</span>
                            </span>

                            <span className={"films__movie-container__cell__movie-type"}>{movie.type}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Films;