import React from "react";
import "./App.css";

export default function NavBar({playerName}) {
    const classNameDefault = "NavBarBox-";

    const handleProfileClick = () => {
        const coll = document.getElementsByClassName(classNameDefault + "profileButton-menu");
        const arrow = document.getElementsByClassName("button-arrow")[0];
        let i;


        if (arrow.innerHTML === "▼") {
            arrow.innerHTML = "▲";
        } else {
            arrow.innerHTML = "▼";
        }

        for (i = 0; i < coll.length; i++) {
            if (coll[i].style.display === "flex") {
                coll[i].style.display = "none";
            } else {
                coll[i].style.display = "flex";
            }
            coll[i].addEventListener("click", () => {
                this.classList.toggle("active");
            });
        }
    }

    return (<>
        <div className="NavBar">
            <div className={classNameDefault + "serverName"}>
                HELLRPG
            </div>
            <div className={classNameDefault + "empty"}></div>
            <div className={classNameDefault + "categoryWrapper"}>
                <div className={classNameDefault + "rankingi"}>
                    rankingi
                </div>
                <div className={classNameDefault + "sklep"}>
                    sklep
                </div>
                <div className={classNameDefault + "ogloszenia"}>
                    ogłoszenia
                </div>
            </div>
            <div className={classNameDefault + "empty"}></div>
            <div className={classNameDefault + "profile"}>
                <div className={classNameDefault + "profileButtonWrapper"} onClick={handleProfileClick}>
                    <div className={"button-arrow"}>▼</div>
                    <div>{playerName}</div>
                    <img src={"https://minotar.net/helm/" + playerName + "/32"} alt={"Brak Obrazka"}></img>
                </div>
            </div>
        </div>
        <div className={classNameDefault + "profileButton-menuWrapper"}>
            <div className={classNameDefault + "profileButton-menu"}>profil</div>
            <div className={classNameDefault + "profileButton-menu"}>enderchest</div>
            <div className={classNameDefault + "profileButton-menu"}>ekwipunek</div>
            <div className={classNameDefault + "profileButton-menu"}>vouchery</div>
        </div>

    </>);
}