import React, {useState} from 'react';
import './Dots.css';
import dots from "../../image/3-dots.svg";
import closeItem from "../../image/close-icon.jpg";
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

    const closeDeleteModal = () => {
        setModalDeleteActive(false);
    }

    const closeEditModal = () => {
        setModalEditActive(false);
    }

    const openEditModal = () => {
        closeMenu();
        setModalEditActive(true);

    }

    const openDeleteModal = () => {
        closeMenu();
        setModalDeleteActive(true);
    }

    return <div className="dropdown-menu">
        {isOpen ? (
            <>
                <ul className="dropdown-menu__menu">
                    <li className={"dropdown-menu__space"}>
                        <div className={"dropdown-menu__space-for-button"}>
                            <button className="dropdown-menu__close-button-img" onClick={closeMenu}><img
                                className="dropdown-menu__image" src={closeItem} alt="Cross for menu"/></button>
                        </div>
                    </li>
                    <li>
                        <button onClick={openEditModal}
                                type="button">Edit
                        </button>
                    </li>
                    <li>
                        <button onClick={openDeleteModal} type="button">Delete
                        </button>
                    </li>
                </ul>
            </>
        ) : <button className="dropdown-menu__button-img" onClick={openMenu}><img className="dropdown-menu__image"
                                                                                  src={dots} alt="Dots-image for menu"/>
        </button>
        }
        {isModalEditActive && <EditMovie onclose={closeEditModal}/>}
        {isModalDeleteActive && <DeleteMovie onclose={closeDeleteModal}/>}
    </div>
}

export default Dots;