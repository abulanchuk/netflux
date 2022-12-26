import React, {useState} from "react";
import "./ModalStyle.css";
import {Multiselect} from "multiselect-react-dropdown";
import Modal from "./Modal";
import MOVIE from "../../../constants";
import {store} from "../../../store/Store";
import {addMovie, setAllMovies} from "../../../store/movies/actions";

const AddMovie = ({onClose}) => {
    const [genre, setGenre] = useState(MOVIE.GENRES);
    const [movie, setMovie] = useState({
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: 0
    })

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
    }

    function updateMovieFromForm(event) {
        const newMovie = {...movie}
        if (event.target.name === "runtime") {
            newMovie.runtime = parseInt(event.target.value);
        } else {
            newMovie[event.target.name] = event.target.value
        }
        setMovie(newMovie)
    }

    function updateMovieGenresFromForm(selectedList, selectedItem) {
        const newMovie = {...movie}
        newMovie["genres"] = selectedList;
        setMovie(newMovie)
    }

    const handleSubmit = () => {
        store.dispatch(addMovie(movie));

        fetch(MOVIE.MOVIE_URL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        onClose();
    }

    return (
        <Modal onClose={onClose} title={'ADD MOVIE'} resetButtonText={'RESET'} submitButtonText={'SUBMIT'}
               onReset={handleReset} onSubmit={handleSubmit}>
            <div className={"add--movie"}>
                <form>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>TITLE:</p>
                        <input className={"movie__label__input"} type="text" name="title" value={movie.title}
                               onChange={(event) => updateMovieFromForm(event)}/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>RELEASE DATE:</p>
                        <input className={"movie__label__input"} type="date" name="release_date"
                               value={movie.release_date} onChange={(event) => updateMovieFromForm(event)}/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}> MOVIE URL:</p>
                        <input className={"movie__label__input"} type="text" name="poster_path"
                               value={movie.poster_path}
                               onChange={(event) => updateMovieFromForm(event)}/>
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
                            name="genres"
                            value={movie.genres}
                            onSelect={updateMovieGenresFromForm}
                            onRemove={updateMovieGenresFromForm}
                        />
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>OVERVIEW:</p>
                        <input className={"movie__label__input"} type="text" name="overview" value={movie.overview}
                               onChange={(event) => updateMovieFromForm(event)}/>
                    </label>
                    <label className={"movie__label"}>
                        <p className={"movie__label__name"}>RUNTIME:</p>
                        <input className={"movie__label__input"} type="number" name="runtime" value={movie.runtime}
                               onChange={(event) => updateMovieFromForm(event)}/>
                    </label>
                </form>
            </div>
        </Modal>
    )
}
export default AddMovie;