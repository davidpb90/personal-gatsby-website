import React from "react";
import HeaderWrapper from "./src/components/header-wrapper";

export const wrapPageElement = ({ element, props }) => (
    <HeaderWrapper {...props}>{element}</HeaderWrapper>
);