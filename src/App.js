import React, {useState} from 'react';

import './App.css';
import './components/errPage/NotFoundPage.css'
import Header from "./components/Header/Header";
import NotFoundPage from "./components/errPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Content from "./components/page/Content";

export default function App() {
    const isError = false;
    const [selectedMovie, setSelectedMovie] = useState(null);

    if (isError) {
        return <NotFoundPage/>
    }
    return (
        <div>
            <Header showButton={!isError} selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>
            <Content selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>
            <Footer/>
        </div>
    );
}




