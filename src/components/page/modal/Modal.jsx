import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';
import "./Modal.css";

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({onClose, children, title, onReset, onSubmit, resetButtonText, submitButtonText}) => {

    useEffect(() => {
        const onEscPress = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', onEscPress);

        return () => {
            window.removeEventListener('keydown', onEscPress);
        };
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={"backdrop"} onClick={handleBackdropClick}>
            <div className={`modalContent ${"modal"}`}>
                <header className={"modal__header"}>
                    <button
                        type="button"
                        className={"modal__header__closeBtn--close"}
                        onClick={onClose}
                        aria-label="Close">
                        &times;
                    </button>
                </header>

                <div className={"modal__content"}>
                    <h1 className={"modal-window__h1"}>{title}</h1>
                    {children}
                    <div className={"movie__buttons"}>
                        {resetButtonText && <button className={"modal__button-reset"} onClick={onReset}
                                                    type="button">{resetButtonText || 'RESET'} </button>}
                        <button className={"modal__button-submit"} type="button">{submitButtonText || 'SUBMIT'}</button>
                    </div>
                </div>
            </div>
        </div>,
        modalRootRef,
    );
};
export default Modal;