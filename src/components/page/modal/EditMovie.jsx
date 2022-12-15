import React, {useState} from "react";
import "./ModalStyle.css";
import {Multiselect} from "multiselect-react-dropdown";
import Modal from "./Modal";

const EditMovie = ({onclose}) => {
    const [genre, setGenre] = useState(['Crime', 'Documentary', 'Horror', 'Comedy'])
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
    }

    const handleSubmit = () => {

    }

    return (
        <Modal onClose={onclose} title={'EDIT MOVIE'} submitButtonText={'SAVE'} resetButtonText={'RESET'}  onReset={handleReset} onSubmit={handleSubmit}>
            <div className={"edit--movie"}>
                <form>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>NAME:</p>
                        <input className={"movie__label__input"} type="text" name="name"/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>RELEASE DATE:</p>
                        <input className={"movie__label__input"} type="date" name="release-date"/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}> MOVIE URL:</p>
                        <input className={"movie__label__input"} type="text" name="movie-url"/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>GENRE:</p>
                        <Multiselect
                            className={"movie__label__dropdown"}
                            isObject={false}
                            options={genre}
                            showCheckbox
                            placeholder={'Select Genre'}
                            hidePlaceholder={true}
                            showArrow={true}
                        />
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>OVERVIEW:</p>
                        <input className={"movie__label__input"} type="text" name="overview"/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>RUNTIME:</p>
                        <input className={"movie__label__input"} type="text" name="runtime"/>
                    </label>
                </form>
            </div>
        </Modal>
    )
}
export default EditMovie;