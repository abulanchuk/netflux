import React, {useState} from "react";
import './Header.css';
import Logo from "../logo/Logo";
import Modal from "../page/Modal";
import AddMovie from "../page/modal/AddMovie";

const Header = ({showButton}) => {
    const [isModalActive, setModalActive] = useState(false);
    return <div className="header-container">
        <Logo/>
        {showButton && <button onClick={()=>{setModalActive(true)}}  type="button" className={"header-container__add-movie-button"}>+ADD MOVIE</button>}
        {isModalActive && <Modal onClose={()=>{
        setModalActive(false)}}><AddMovie/></Modal>}
    </div>
}

export default Header;
