import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";

function Main() {
    return (
        <div className="Main">
            <NavBar playerName={"Mires_"} />

            <Footer />
        </div>
    );

}


export default Main;