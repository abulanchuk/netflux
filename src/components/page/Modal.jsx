import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import "./Modal.css";

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {

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
                    {children}
                </div>
            </div>
        </div>,
        modalRootRef,
    );
};
export default Modal;