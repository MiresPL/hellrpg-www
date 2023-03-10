import React from "react";
import "../App.css";
import Banner from "./Banner";


export default function MainPage() {
    return (
        <div className="MainPage">
            <Banner />
            <div className={"mainPageWrapper"}></div>
            <div className={"mainPageWrapper-left"}></div>

        </div>
    );
}