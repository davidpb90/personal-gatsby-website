import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
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
} from '../scss/components/layout.module.scss'
//from './layout.module.scss'


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
        <div style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }} className={wrapper}>
	  		<div className={mainContainer}>
                {/* <Header>

                </Header> */}
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
            <Footer>
            </Footer>
		</div>
        
       
    )
}

export default Layout