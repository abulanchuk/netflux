import React, {useState} from "react";
import './Header.css';
import Logo from "../logo/Logo";
import AddMovie from "../page/modal/AddMovie";

const Header = ({showButton}) => {
    const [isModalActive, setModalActive] = useState(false);

    const handleButtonClick = () => {
        setModalActive(true);
    }

    const handleModalClose = () => {
        setModalActive(false);
    }
    return <div className="header-container">
        <Logo/>
        {showButton &&
            <button onClick={handleButtonClick} type="button" className={"header-container__add-movie-button"}>+ADD
                MOVIE</button>}
        {isModalActive && <AddMovie onClose={handleModalClose}/>}
    </div>
}

export default Header;
