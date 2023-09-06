import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeaderWrapper from './header-wrapper'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    wrapper,
    mainContainer,
    main,
    rightNavbar,
    brand,
    navbar,
    footer
} from './layout.module.scss'

const NavBar = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query MyTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    
    return (
        
	    		<div className={rightNavbar}>
	    		  	<h3 className={brand}>DPB</h3>
	    		  	{/* <div className={navbarToggle}>
	    		  		<i className={fas}></i>
	    		  	</div> */}
	    		  	<nav className={navbar}>
                        <ul className={navLinks}>
	    		    		<li className={navLinkItem}> 
                                <Link to="/" className={navLinkText}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>
                                    About
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText}>
                                    Blog
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/travels" className={navLinkText}>
                                    Travels
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/photography" className={navLinkText}>
                                    Photography
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/stories" className={navLinkText}>
                                    Stories
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/cv" className={navLinkText}>
                                    CV
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/contact" className={navLinkText}>
                                    Contact
                                </Link>
                            </li>
	    		    		{/* <li><a className={navLink} href="data.html">Data</a></li>
	    		    		<li><a className={navLink} href="stories.html">Stories</a></li>
	    		    		<li><a className={navLink} href="photography.html">Photography</a></li>
	    		    		<li><a className={navLink} href="travels.html">Travels</a></li>
	    		    		<li><a className={navLink} href="experiments.html">Experiments</a></li>
	    		    		<li><a className={navLink} href="cv.html">CV</a></li>
	    		    		<li><a className={navLink} href="contact.html">Contact</a></li> */}
	    		    	</ul>
	    		  	</nav>
	    		</div>
	  		

        // <div className={container}>
        //     <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        //     <nav>
        //         <ul className={navLinks}>
        //             <li className={navLinkItem}>
        //                 <Link to="/">
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className={navLinkItem}>
        //                 <Link to="/about">
        //                     About
        //                 </Link>
        //             </li>
        //             <li className={navLinkItem}>
        //                 <Link to="/blog" className={navLinkText}>
        //                     Blog
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <main>
        //         <h1 className={heading}>{pageTitle}</h1>
        //         {children}
        //     </main>
        // </div>
    )
}

export default NavBar