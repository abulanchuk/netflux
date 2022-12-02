import React from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import dataMocks from "../../mocks/MOCK_DATA.json";
import dots from "../../image/3-dots.svg";

const Content = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content"}>
                <h1 className={"find-movie"}>FIND YOUR MOVIE</h1>
                <Search/>
            </div>
            <Films/>
        </div>
    )
}

const Search = () => {
    return (
        <div className={"search-container"}>
            <input className={"search-field"} type="text" placeholder="What do you want to watch?"/>
            <button className={"search-button"} type="button">SEARCH</button>
        </div>
    )
}

const Films = () => {
    if (dataMocks.length === 0) {
        return (
            <div className={"no-films"}>
                <SortingGenre/>
                <div className={"movie-not-found"}>No Movie Found</div>
            </div>
        )
    }

    return (
        <div>
            <div className={"films"}>
                <SortingGenre/>
                <div className={"movie-counter"}>
                    <div className={"digit-counter"}>
                        {dataMocks.length}</div>
                    <div>&nbsp;movies found</div>
                </div>
                <div className={"movie-container"}>
                    {dataMocks.map(movie => {
                        return <div className={"cell"}>
                            <input className={"dots"} type="image" src={dots} alt="button «input»"/>
                            <img className={"image-movie"} src={movie.image} alt="movie-img"/>
                            <span className={"description-movie"}>
                                <span className={"movie-name"}>{movie.name}</span>
                                <span className={"movie-year"}>{movie.year}</span>
                            </span>

                            <span className={"movie-type"}>{movie.type}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

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
                        <button className="movie-genre" type="button">ALL</button>
                    </li>
                    <li>
                        <button className="movie-genre" type="button">DOCUMENTARY</button>
                    </li>
                    <li>
                        <button className="movie-genre" type="button">COMEDY</button>
                    </li>
                    <li>
                        <button className="movie-genre" type="button">HORROR</button>
                    </li>
                    <li>
                        <button className="movie-genre" type="button">CRIME</button>
                    </li>
                </ul>
                <ul>
                    <li className={"sort-by"}>SORT BY</li>
                    <li>
                        <select className={"drop-menu-date"}>
                            {movieYear}
                        </select>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Content;


