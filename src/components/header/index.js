import PropTypes from "prop-types"
import React from "react"
import ModeToggle from '../mode-toggle';
import Menu from "../menu"

import {
    menuTogglewrap,
    menuButton,
    mainButton,
    header,
    darkModeToggle,
    brand

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

    handleClick = () => {
        this.toggleMenu()
    }
    handleKeyDown = (ev) => {
        // check keys if you want
        if (ev.keyCode === 13) {
          this.toggleMenu()
        }
     }

    render() {
        return (
            <>
                <Menu isActive={this.state.menuShow} toggleAction={this.toggleMenu} />
                <header className={header}>
                    {/* <div className={headbar}> */}
                        <div className={menuTogglewrap}>
                        {/* className={menuButton + ' ' + mainButton} */}
                            <button className={menuButton} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
                                {this.state.menuShow ? 'close' : 'open'}
                            </button>
                        </div>
                        <h3 className={brand}>DPB</h3>
                        <div className={darkModeToggle}>
                            <ModeToggle>

                            </ModeToggle>
                        </div>
                            {/* to fix */}
                            {/* {<a to="/">{this.props.pageTitle}</a>}  */}
                        
                        
                    {/* </div> */}
                    
                </header>
                
                
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