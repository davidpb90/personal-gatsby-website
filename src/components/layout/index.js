import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavBar from '../navbar/index'
import Footer from '../footer'
import Header from '../header/header'
import {
    bigContainer,
    bigContainer__row,
    bigContainerFluid,
    bigContainer__col12,
    bigContainer__col11,
    bigContainer__col1,
    bigContainer__col10,
    bigContainer__col2,
    container,
    container__row,
    heading,
    container__col12,
    container__col11,
    container__col1,
    container__col10,
    container__col2,
    hiddenMdDown,
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
} //from '../../scss/main.scss'
from '../../scss/5-components/layout.module.scss'


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
        }} className={bigContainerFluid}>
	  		<div className={bigContainer__row}>
                <div className={container__col1 + ' ' + hiddenMdDown}>    
                    <NavBar>

                    </NavBar>
                </div>
                <main className={container__col11}>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
	    			{/* <h1 className={text}-left py-1 px-2 mx-2">David Pardo Bernal</h1> */}
	    			{/* <p className={lead} py-1 px-2 mx-2">A personal and professional repository.</p> */}
	    			{/* <p className={lead}"> */}
	    			{/* </p> */}
	    		    {/* <script src="js/p5-sketches.js"></script> */}
	    		</main>
	    		
	  		</div>
            <div className={container__row}>
                <div className={container__col12}>   
                    <Footer>
                    </Footer>
                </div>
            </div>	
		</div>
        
       
    )
}

export default Layout