import React, {useState} from "react";
import './Header.css';
import Logo from "../logo/Logo";
import AddMovie from "../page/modal/AddMovie";
import loop from "../../image/search.svg";

const Header = ({showButton, isMovieDescriptionOpen, setMovieDescription}) => {
    const [isModalActive, setModalActive] = useState(false);
    const [isLoopActive, setLoopActive] = useState(false);

    const handleLoop = () => {
        setLoopActive(!isLoopActive);
        setMovieDescription(false);
    }

    const handleButtonClick = () => {
        setModalActive(true);
    }

    const handleModalClose = () => {
        setModalActive(false);
    }

    if(!showButton){
        return <div className="header-container">
            <Logo/>
        </div>
    }

    return <div className="header-container">
        <Logo/>
        {
            isMovieDescriptionOpen ? <button onClick={handleLoop} className="header-container__loop"><img
                    src={loop} alt="loop"/></button> :
                <button onClick={handleButtonClick} type="button"
                        className={"header-container__add-movie-button"}>+ADD
                    MOVIE</button>
        }


        {isModalActive && <AddMovie onClose={handleModalClose}/>}
    </div>
}

export default Header;
