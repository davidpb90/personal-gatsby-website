import React, { useState, useEffect } from "react";

import Sun from "../../images/sun.svg";
import Moon from "../../images/moon.svg";

// You'll need to import index.css just in one of the components in your app.

import {
    div
} from '../../scss/5-components/mode-toggle.module.scss'
// import '../scss/main.scss';

const isBrowser = typeof window !== "undefined";

function getDefaultTheme() {
    const savedTheme =
        isBrowser ? (
            window.localStorage.getItem("theme")
        ) : (
            null
        );
    return savedTheme ? savedTheme : "light";
}



const ModeToggle = props => {
    const [isDark, setIsDark] = useState(getDefaultTheme());

    useEffect(() => {
        if (isDark === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        if (isBrowser) {
            window.localStorage.setItem("theme", isDark);
        }
    }, [, isDark]);

    return (
        <div className={div} onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}>
            {isDark === "dark" ? (
                <img src={Sun} alt="sun img" />
            ) : (
                <img src={Moon} alt="moon img" />
            )}
            {/* {isDark ? (
                <img onClick={() => setIsDark(!isDark)} src={Sun} />
            ) : (
                <img onClick={() => setIsDark(!isDark)} src={Moon} />
            )} */}
        </div>
    );
};

export default ModeToggle;