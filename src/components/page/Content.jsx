import React, {useState} from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import Films from "./Films";
import Search from "./Search";
import MovieDesc from "./modal/filmdescription/MovieDesc";

const Content = ({setMovieDescription, isMovieDescriptionOpen}) => {
    const [selectedMovie, setSelectedMovie] = useState();


    const setMovie = (x) => {
        setSelectedMovie(x);
        setMovieDescription(true);
    }

    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content-container"}>
                {isMovieDescriptionOpen ? <MovieDesc movie={selectedMovie}/> : <Search/>}
            </div>
            <Films setDescModalActive={setMovieDescription} setMovie={setMovie}/>
        </div>
    )
}


export default Content;


