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
                <ul>
                    <li>
                        <button className="sorting-container__movie-genre" type="button">ALL</button>
                    </li>
                    <li>
                        <button className="sorting-container__movie-genre" type="button">DOCUMENTARY</button>
                    </li>
                    <li>
                        <button className="sorting-container__movie-genre" type="button">COMEDY</button>
                    </li>
                    <li>
                        <button className="sorting-container__movie-genre" type="button">HORROR</button>
                    </li>
                    <li>
                        <button className="sorting-container__movie-genre" type="button">CRIME</button>
                    </li>
                </ul>
                <ul>
                    <li className={"sorting-container__sort-by"}>SORT BY</li>
                    <li>
                        <select className={"sorting-container__sort-by__drop-menu-date"}>
                            {movieYear}
                        </select>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SortingGenre;
