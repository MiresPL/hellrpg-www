import React from "react";
import "../App.css";
import profile from "../assets/profile.png";
import enderchest from "../assets/enderchest.png";
import chest from "../assets/chest.png";
import nametag from "../assets/nametag.png";

export default function Banner() {
    const classNameDefault = "NavBarBox-";

    return (<>
        <div className={"Banner"}>
            <div className={classNameDefault + "profileButton-menuWrapper"}>
                <div className={classNameDefault + "profileButton-menuWrapper2"}>
                    <div className={classNameDefault + "profileButton-menu"}>
                        <div className={classNameDefault + "profileButton-menu-elementWrapper"}>
                            <img src={profile} alt={"profil"}></img>
                            profil
                        </div>
                    </div>
                    <div className={classNameDefault + "profileButton-menu"}>
                        <div className={classNameDefault + "profileButton-menu-elementWrapper"}>
                            <img src={enderchest} alt={"enderchest"}></img>
                            enderchest
                        </div>
                    </div>
                    <div className={classNameDefault + "profileButton-menu"}>
                        <div className={classNameDefault + "profileButton-menu-elementWrapper"}>
                            <img src={chest} alt={"eq"}></img>
                            ekwipunek
                        </div>
                    </div>
                    <div className={classNameDefault + "profileButton-menu"}>
                        <div className={classNameDefault + "profileButton-menu-elementWrapper"}>
                            <img src={nametag} alt={"vouchery"}></img>
                            vouchery
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}