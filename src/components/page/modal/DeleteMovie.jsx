import React from "react";
import "./ModalStyle.css";
import Modal from "./Modal";

const DeleteMovie = ({onclose}) => {
    return (
        <Modal onClose={onclose} title={'DELETE MOVIE'} submitButtonText={'CONFIRM'}>
        <div>
         <p className={"modal-window__p"}>Are you sure you want to delete this movie?</p>
        </div>
        </Modal>
    )
}
export default DeleteMovie;