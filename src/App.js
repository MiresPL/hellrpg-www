import React from 'react';
import "./App.css";

function Main() {
    return (
        <div className="Main">
            <NavBar />
        </div>
    );

}

function NavBar() {
    return (
        <div className="NavBar">
            <NavBarBox
                text={"HELLRPG.PL"}
                classNameId={"serverName"}
            />
        </div>
    );
}

function NavBarBox({text, classNameId}) {
    return (
        <div className={"NavBarBox-" + classNameId}>
            {text}
        </div>
    );
}


export default Main;