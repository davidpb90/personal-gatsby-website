import React, { useState, useEffect } from "react";

import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

// You'll need to import index.css just in one of the components in your app.

import "../scss/main.scss";

const Header = props => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [, isDark]);

    return (
        <div>
            {isDark ? (
                <img onClick={() => setIsDark(!isDark)} src={Sun} />
            ) : (
                <img onClick={() => setIsDark(!isDark)} src={Moon} />
            )}
        </div>
    );
};

export default Header;