import React from "react";
import errImage from "../../image/404pic.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            {/*<Header/>*/}
            <div className={"errorPage"}>
                <h1 className={"errorPage__textError"}>Page Not Found</h1>
                <img src={errImage} className="errorPage__img404" alt="err404"/>
                <Link to={'/'}> <button className={"errorPage__errorButton"} type="button">GO BACK TO HOME</button></Link>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default NotFoundPage;