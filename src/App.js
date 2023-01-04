import React, {useEffect, useState} from 'react';

import './App.css';
import './components/errPage/NotFoundPage.css'
import Header from "./components/Header/Header";
import NotFoundPage from "./components/errPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Content from "./components/page/Content";

import {store} from "./store/Store";
import MOVIE from "./constants";
import {SET_ALL_MOVIES, setAllMovies} from "./store/movies/actions";
import {Route, Router, Routes} from "react-router-dom";
import MovieDesc from "./components/page/modal/filmdescription/MovieDesc";


export default function App() {
    const isError = false;
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch(MOVIE.MOVIE_URL)
            .then(response => response.json())
            .then(response => {
                store.dispatch(setAllMovies(response.data))
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    if (isError) {
        return <NotFoundPage/>
    }

    return (
        <div>
            <Header showButton={!isError} selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>
            <Routes>
               <Route path='/' element={<Content selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
                <Route path="films/:id" element={<MovieDesc/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}




