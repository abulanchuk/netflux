import React from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import Films from "./Films";
import Search from "./Search";
import MovieDesc from "./modal/filmdescription/MovieDesc";

const Content = ({selectedMovie, setSelectedMovie}) => {

    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content-container"}>
                {selectedMovie ? <MovieDesc movie={selectedMovie}/> : <Search/>}
            </div>
            <Films  setMovie={setSelectedMovie}/>
        </div>
    )
}


export default Content;


