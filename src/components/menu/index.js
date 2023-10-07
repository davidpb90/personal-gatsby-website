import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    container__col1,
    siteTitle,
    wrapper,
    mainContainer,
    main,
    rightNavbar,
    brand,
    navbar,
    footer
} from '../../scss/5-components/menu.module.scss'
import { slide as Menu } from "react-burger-menu"



export default props => {
    return (
        // <Menu>
        //     <div className={container__col1 + ' ' + rightNavbar}>
	    // 		  	<h3 className={brand}>DPB</h3>
	    // 		  	{/* <div className={navbarToggle}>
	    // 		  		<i className={fas}></i>
	    // 		  	</div> */}
        //             <nav className={navbar}>
        //                 <Header>
                        
        //                 </Header>
        //                 <ul className={navLinks}>
	    // 		    		<li className={navLinkItem}> 
        //                     <Link to="/" className={navLinkText}>
        //                             Home
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/about" className={navLinkText}>
        //                             About
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/blog" className={navLinkText}>
        //                             Blog
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/travels" className={navLinkText}>
        //                             Travels
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/photography" className={navLinkText}>
        //                             Photography
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/stories" className={navLinkText}>
        //                             Stories
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/cv" className={navLinkText}>
        //                             CV
        //                         </Link>
        //                     </li>
        //                     <li className={navLinkItem}>
        //                         <Link to="/contact" className={navLinkText}>
        //                             Contact
        //                         </Link>
        //                     </li>
	    		    		
	    // 		    	</ul>
	    // 		  	</nav>
	    // 		</div>
        // </Menu>	

        <Menu {...props}>
            {/* <div className={container__col1 + ' ' + rightNavbar}> */}
            <a className={brand}>DPB</a>
            <Header>
            </Header>
            <Link to="/" className="menu-item">
                Home
            </Link>
            <Link to="/about" className="menu-item">
                About
            </Link>                       
            <Link to="/blog" className="menu-item">
                Blog
            </Link>                       
            <Link to="/travels" className="menu-item">
                Travels
            </Link>                       
            <Link to="/photography" className="menu-item">
                Photography
            </Link>                        
            <Link to="/stories" className="menu-item">
                Stories
            </Link>                       
            <Link to="/cv" className="menu-item">
                CV
            </Link>                       
            <Link to="/contact" className="menu-item">
                Contact
            </Link>
        </Menu>

    )
};

