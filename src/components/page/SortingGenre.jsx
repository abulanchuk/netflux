import React from "react";
import "./SortingGenre.css";
import {useSelector} from "react-redux";

import {store} from "../../store/Store";
import {filterMoviesByGenre, setAllMovies} from "../../store/movies/actions";

const SortingGenre = () => {

    let movieYear = [];
    movieYear.push(<option value={1}>RELEASE DATE</option>)
    for (let n = 2022; n >= 2010; n--) {
        movieYear.push(<option value={n}>{n}</option>);
    }

    let listOfMovies = useSelector(state => state.movies.allMovies);
    let filteredList = [];

    const selectMovieByGenre = (genre) => {
        store.dispatch(filterMoviesByGenre(listOfMovies.slice()));
        if (genre === "All") {
            filteredList = listOfMovies.slice();
        } else {
            filteredList = listOfMovies.filter(movie => movie.genres.includes(genre));
        }
        store.dispatch(filterMoviesByGenre(filteredList))
    }
    return (
        <div className={"sorting-container"}>
            <button className="sorting-container__movie-genre" type="button"
                    onClick={() => selectMovieByGenre("All")}>ALL
            </button>
            <button className="sorting-container__movie-genre" type="button"
                    onClick={() => selectMovieByGenre("Documentary")}>DOCUMENTARY
            </button>
            <button className="sorting-container__movie-genre" type="button"
                    onClick={() => selectMovieByGenre("Comedy")}>COMEDY
            </button>
            <button className="sorting-container__movie-genre" type="button"
                    onClick={() => selectMovieByGenre("Horror")}>HORROR
            </button>
            <button className="sorting-container__movie-genre" type="button"
                    onClick={() => selectMovieByGenre("Crime")}>CRIME
            </button>
            <ul>
                <li className={"sorting-container__sort-by"}>SORT BY</li>
                <li>
                    <select className={"sorting-container__sort-by__drop-menu-date"}>
                        {movieYear}
                    </select>
                    <div className={"sorting-container__sort-by__drop-menu-date__arrow"}></div>
                </li>
            </ul>
        </div>
    )
}

export default SortingGenre;
