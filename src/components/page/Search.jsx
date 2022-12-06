import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className={"search-container"}>
            <input className={"search-container__search-field"} type="text" placeholder="What do you want to watch?"/>
            <button className={"search-container__search-button"} type="button">SEARCH</button>
        </div>
    )
}

export default Search;