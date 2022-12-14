import React, {useState} from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import Films from "./Films";
import Search from "./Search";
import MovieDesc from "./modal/filmdescription/MovieDesc";

const Content = () => {
    const [isDescModalActive, setDescModalActive] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();

    // const descModalActive = () => {
    //     setDescModalActive(!isDescModalActive);
    // }

    const setMovie = (x) => {
        setSelectedMovie(x);
    }

    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content-container"}>
                {isDescModalActive ? <MovieDesc movie={selectedMovie}/> : <Search/>}
            </div>
            <Films setDescModalActive={setDescModalActive} setMovie={setMovie}/>
        </div>
    )
}


export default Content;


