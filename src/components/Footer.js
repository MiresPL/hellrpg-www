import React from "react";
import "../App.css"

export default function Footer() {
    return (<>
        <footer>
            <div className={"Footer-wrapper"}>
                <div className={"Footer-copyright"}>
                    hellrpg ©
                </div>
                <div className={"Footer-otherWrapper"}>
                    <div className={"Footer-regulamin"}>
                        Regulamin
                    </div>
                    <div className={"Footer-cookies"}>
                        Polityka Cookies
                    </div>
                </div>
            </div>
        </footer>
    </>)
}