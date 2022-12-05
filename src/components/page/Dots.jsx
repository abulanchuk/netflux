import React, {useState} from 'react';
import './Dots.css';
import dots from "../../image/3-dots.svg";


const Dots = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return <div className="dropdown-menu">
        <button className="dropdown-menu__button-img" onClick={openMenu}><img className="dropdown-menu__image" src={dots} alt="Dots-image for menu"/>
        </button>
        {isOpen ? (
            <ul className="dropdown-menu__menu">
                <li>
                    <button>Edit</button>
                </li>
                <li>
                    <button>Delete</button>
                </li>
            </ul>
        ) : null}
    </div>
}

export default Dots;