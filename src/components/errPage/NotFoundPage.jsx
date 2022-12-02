import React from "react";
import errImage from "../../image/404pic.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NotFoundPage = () => {
    return (
        <div>
            <Header/>
            <div className={"errorPage"}>
                <h1 className={"textErr"}>Page Not Found</h1>
                <img src={errImage} className="img404" alt="err404"/>
                <button className={"errorButton"} type="button">GO BACK TO HOME</button>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;