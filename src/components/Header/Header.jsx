import React from "react";
import './Header.css';
import Logo from "../logo/Logo";

const Header = ({showButton}) => {
    return <div className="header-container">
        <Logo/>
        {showButton && <button  type="button" className={"header-container__add-movie-button"}>+ADD MOVIE</button>}
    </div>
}

export default Header;
