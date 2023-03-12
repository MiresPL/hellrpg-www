import React from "react";
import "../App.css";

export default function NavBar({playerName}) {
    const classNameDefault = "NavBarBox-";

    const handleProfileClick = () => {
        const coll = document.getElementsByClassName(classNameDefault + "profileButton-menu");
        const arrow = document.getElementsByClassName("button-arrow")[0];
        let i;


        if (arrow.innerHTML === "▼") {
            arrow.innerHTML = "▲";
            document.getElementsByClassName(classNameDefault + "profileButton-menuWrapper2")[0].style.border = "1px solid #1A91FF"
            document.getElementsByClassName(classNameDefault + "profileButton-menuWrapper2")[0].style.padding = "2vh 2vw 2vh 2vw"
        } else {
            arrow.innerHTML = "▼";
            document.getElementsByClassName(classNameDefault + "profileButton-menuWrapper2")[0].style.border = "none"
            document.getElementsByClassName(classNameDefault + "profileButton-menuWrapper2")[0].style.padding = "0"
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

    </>);
}