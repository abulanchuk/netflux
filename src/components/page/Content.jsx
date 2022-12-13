import React from "react";
import "./Content.css";
import background from "../../image/background.jpg";
import Films from "./Films";
import Search from "./Search";

const Content = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className={"content-container"}>
                <Search/>
            </div>
            <Films/>
        </div>
    )
}


export default Content;


