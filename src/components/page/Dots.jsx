import React, {useState} from 'react';
import './Dots.css';
import dots from "../../image/3-dots.svg";
import closeItem from "../../image/close-icon.jpg";
import Modal from "./Modal";
import EditMovie from "./modal/EditMovie";
import DeleteMovie from "./modal/DeleteMovie";


const Dots = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalEditActive, setModalEditActive] = useState(false);
    const [isModalDeleteActive, setModalDeleteActive] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return <div className="dropdown-menu">
        {isOpen ? (
            <>
                <button className="dropdown-menu__close-button-img" onClick={closeMenu}><img className="dropdown-menu__image" src={closeItem} alt="Cross for menu"/></button>
            <ul className="dropdown-menu__menu">
                <li>
                    <button onClick={() => {
                        setModalEditActive(true)}} type="button">Edit</button>
                    {isModalEditActive && <Modal onClose={() => {
                        setModalEditActive(false)
                    }}><EditMovie/></Modal>}
                </li>
                <li>
                    <button onClick={() => {
                        setModalDeleteActive(true)}} type="button">Delete</button>
                    {isModalDeleteActive && <Modal onClose={() => {
                        setModalDeleteActive(false)
                    }}><DeleteMovie/></Modal>}
                </li>
            </ul>
            </>
        ) : <button className="dropdown-menu__button-img" onClick={openMenu}><img className="dropdown-menu__image" src={dots} alt="Dots-image for menu"/></button>
        }
    </div>
}

export default Dots;