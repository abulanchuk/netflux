import React from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import Films from "./Films";
import Search from "./Search";

const Content = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content-container"}>
                <h1 className={"content-container__find-movie"}>FIND YOUR MOVIE</h1>
                <Search/>
            </div>
            <Films/>
        </div>
    )
}


export default Content;


