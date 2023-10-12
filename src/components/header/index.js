import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "../menu"

import {
    headbar,
    menuTogglewrap,
    menuButton,
    mainButton,
    header

} from '../../scss/5-components/header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "menuShow": false }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.render = this.render.bind(this);
    }

    toggleMenu(setOverride) {
        console.log("toggleMenu, setOverride:", setOverride)
        let menuState = (typeof setOverride !== "undefined") ? setOverride : !this.state.menuShow
        this.setState({ "menuShow": menuState })
    }

    render() {
        return (
            <>
                <header className={header}>
                    <div className={headbar}>
                        <h1>
                            <Link to="/">{this.props.siteTitle}</Link>
                        </h1>
                    </div>
                    <div className={menuTogglewrap}>
                        <div className={menuButton + ' ' + mainButton} onClick={() => { this.toggleMenu() }} />
                    </div>
                </header>
                <Menu isActive={this.state.menuShow} toggleAction={this.toggleMenu} />
            </>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header