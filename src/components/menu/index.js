import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { bool } from 'prop-types';
import Header from '../header'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    a,
    container__col1,
    siteTitle,
    wrapper,
    mainContainer,
    main,
    rightNavbar,
    brand,
    navbar,
    footer,
    bmCross,
    bmBurgerButton,
    bmBurgerBars,
    bmBurgerBarsHover,
    bmCrossButton,
    nav,
    menuButton,
    closeButton,
    sideMenu,
    active
} from '../../scss/5-components/menu.module.scss'
import ModeToggle from '../mode-toggle';


// const Menu = ({ open }) => {
const Menu = ({ isActive, toggleAction, }) => { 
    const getClass = () => (
        (isActive ? sideMenu + ' ' + active : sideMenu)
    );
    return (
     
        // <nav className={nav} open={open}>
        <div className={getClass()} > 
            <div className={menuButton + ' ' + closeButton} onClick={() => { toggleAction(false) }} />
	    		  	
                       
                        <ul className={navLinks}>
	    		    		<li className={navLinkItem}> 
                            <Link to="/" className={a}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={a}>
                                    About
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={a}>
                                    Blog
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/travels" className={a}>
                                    Travels
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/photography" className={a}>
                                    Photography
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/stories" className={a}>
                                    Stories
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/cv" className={a}>
                                    CV
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/contact" className={a}>
                                    Contact
                                </Link>
                            </li>
	    		    		
	    		    	</ul>
	    </div>
                           

          
    )   
}
// Menu.propTypes = {
//     open: bool.isRequired,
// }
export default Menu;

        // <Menu className={bmBurgerButton + ' ' + bmBurgerBars + ' ' + bmCross} {...props}>
        //     {/* <div className={container__col1 + ' ' + rightNavbar}> */}
        //     <a className={brand}>DPB</a>
        //     <Header>
        //     </Header>
        //     <Link to="/" className="menu-item">
        //         Home
        //     </Link>
        //     <Link to="/about" className="menu-item">
        //         About
        //     </Link>                       
        //     <Link to="/blog" className="menu-item">
        //         Blog
        //     </Link>                       
        //     <Link to="/travels" className="menu-item">
        //         Travels
        //     </Link>                       
        //     <Link to="/photography" className="menu-item">
        //         Photography
        //     </Link>                        
        //     <Link to="/stories" className="menu-item">
        //         Stories
        //     </Link>                       
        //     <Link to="/cv" className="menu-item">
        //         CV
        //     </Link>                       
        //     <Link to="/contact" className="menu-item">
        //         Contact
        //     </Link>
        // </Menu>

//     )
// };

