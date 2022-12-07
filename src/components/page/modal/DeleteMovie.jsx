import React from "react";
import "./ModalStyle.css";

const DeleteMovie = () => {
    return (
        <div>
            <h1 className={"modal-window__h1"}>DELETE MOVIE</h1>
         <p className={"modal-window__p"}>Are you sure you want to delete this movie?</p>
                <button className={"modal-window__button--confirm"} type="button">CONFIRM</button>
        </div>
    )
}
export default DeleteMovie;