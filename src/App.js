import React, {useState} from 'react';

import './App.css';
import './components/errPage/NotFoundPage.css'
import Header from "./components/Header/Header";
import NotFoundPage from "./components/errPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Content from "./components/page/Content";

export default function App() {
    const isError = false;
    const [isMovieDescriptionOpen, setMovieDescription] = useState(false);

    if (isError) {
        return <NotFoundPage/>
    }
    return (
        <div>
            <Header showButton={!isError} isMovieDescriptionOpen = {isMovieDescriptionOpen} setMovieDescription = {setMovieDescription}/>
            <Content setMovieDescription = {setMovieDescription} isMovieDescriptionOpen = {isMovieDescriptionOpen}/>
            <Footer/>
        </div>
    );
}




