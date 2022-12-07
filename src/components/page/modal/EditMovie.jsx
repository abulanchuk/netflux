import React, {useState} from "react";
import "./ModalStyle.css";
import {Multiselect} from "multiselect-react-dropdown";

const EditMovie = () => {
    const [genre, setGenre] = useState(['Crime', 'Documentary', 'Horror', 'Comedy'])
    return (
        <div className={"edit--movie"}>
            <h1 className={"modal-window__h1"}>EDIT MOVIE</h1>
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
            <div className={"movie__buttons"}>
                <button className={"modal__button-reset"} type="button">RESET</button>
                <button className={"modal__button-submit"} type="button">SAVE</button>
            </div>
        </div>
    )
}
export default EditMovie;