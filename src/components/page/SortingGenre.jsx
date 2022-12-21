import React from "react";
import "./SortingGenre.css";

class SortingGenre extends React.Component {
    render() {
        let movieYear = [];
        movieYear.push(<option value={1}>RELEASE DATE</option>)
        for (let n = 2022; n >= 2010; n--) {
            movieYear.push(<option value={n}>{n}</option>);
        }
        return (
            <div className={"sorting-container"}>
                <button className="sorting-container__movie-genre" type="button">ALL</button>
                <button className="sorting-container__movie-genre" type="button">DOCUMENTARY</button>
                <button className="sorting-container__movie-genre" type="button">COMEDY</button>
                <button className="sorting-container__movie-genre" type="button">HORROR</button>
                <button className="sorting-container__movie-genre" type="button">CRIME</button>
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
}

export default SortingGenre;
