import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLink,
    navLinkItem,
    aMenu,
    menuButton,
    closeButton,
    sideMenu,
    active
} from '../../scss/5-components/menu.module.scss'



// const Menu = ({ open }) => {
const Menu = ({ isActive, toggleAction, }) => { 
    const getClass = () => (
        (isActive ? sideMenu + ' ' + active : sideMenu)
    );
    return (
     
        // <nav className={nav} open={open}>
        <div className={getClass()} > 
            <div className={menuButton + ' ' + closeButton} onClick={() => { toggleAction(false) }} />
	    		  	
                       
                        <ul className={navLink}>
	    		    		<li className={navLinkItem}> 
                            <Link to="/" className={aMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={aMenu}>
                                    About
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={aMenu}>
                                    Blog
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/travels" className={aMenu}>
                                    Travels
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/photography" className={aMenu}>
                                    Photography
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/stories" className={aMenu}>
                                    Stories
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/cv" className={aMenu}>
                                    CV
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/contact" className={aMenu}>
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

