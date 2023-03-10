import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

function Main() {
    return (
        <div className="Main">
            <NavBar playerName={"Mires_"} />
            <MainPage />
            <Footer />
        </div>
    );

}


export default Main;