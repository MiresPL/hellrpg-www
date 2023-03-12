import React from "react";
import "../App.css";
import Banner from "./Banner";
import discordButton from "../assets/discordButton.png"


export default function MainPage() {
    const defName = "MainPage-";
    return (
        <div className="MainPage">
            <Banner/>
            <div className={"MainPageWrapper"}>
                <div className={defName + "Margin"}></div>
                <div className={defName + "Main"}>
                    <div className={defName + "MainWrapper"}>
                        <div className={defName + "MainMargin"}></div>
                        <div className={defName + "MainMain"}>
                            <h1>
                                Witamy!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Ridiculus mus mauris vitae
                                ultricies leo integer malesuada nunc. Et netus et malesuada fames. Proin nibh nisl condimentum id
                                venenatis a condimentum. Sed viverra tellus in hac habitasse platea dictumst. Nunc pulvinar sapien
                                et ligula ullamcorper malesuada. Id faucibus nisl tincidunt eget nullam non.
                            </p>

                            <h1>
                                DOŁĄCZ DO NASZEJ SPOŁECZNOŚCI DISCORD!
                            </h1>
                            <div className={defName + "MainMainButton"}>
                                <p>
                                    <img src={discordButton} alt="discordButton" className={defName + "MainButton"}/>
                                </p>
                                <p>
                                    A TAKŻE
                                </p>
                            </div>

                            <div className={defName + "MainMainChangelog"}>
                                <h1>PRZECZYTAJ CHANGELOG</h1>

                                <div className={defName + "MainMainChangelogButton"}>
                                    patch notes
                                </div>
                            </div>
                        </div>
                        <div className={defName + "MainMargin"}></div>
                    </div>
                </div>
                <div className={defName + "Margin"}></div>
            </div>

        </div>
    );
}