import React from "react";
import Header from "./header/header";

const HeaderWrapper = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

export default HeaderWrapper;