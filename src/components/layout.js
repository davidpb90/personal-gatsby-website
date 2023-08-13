import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavBar from '../components/navbar'
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

const Layout = ({ pageTitle, children }) => {
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
        <div className={wrapper}>
	  		<div className={mainContainer}>
	    		<main className={main}>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
	    			{/* <h1 className={text}-left py-1 px-2 mx-2">David Pardo Bernal</h1> */}
	    			{/* <p className={lead} py-1 px-2 mx-2">A personal and professional repository.</p> */}
	    			{/* <p className={lead}"> */}
	    			{/* </p> */}
	    		    {/* <script src="js/p5-sketches.js"></script> */}
	    		</main>
	    		<NavBar> 
                    
                </NavBar>
	  		</div>	
			<footer className={footer}>
                <Link to="/contact" className={navLinkText}>
                    Contact Me
                </Link>
				<p>Designed and built by David Pardo Bernal based on Bootstrap's Cover template</p>
	  	    </footer>
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

export default Layout