import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Menu from '../menu'
import Footer from '../footer'
// import ModeToggle from '../mode-toggle'
import Burger from '../burger'
import Header from "../header"
// import { cold } from 'react-hot-loader';
// cold(Header);
import {
    bigContainer,
    bigContainer__row,
    bigContainerFluid,
    bigContainer__col12,
    bigContainer__col11,
    bigContainer__col1,
    bigContainer__col10,
    bigContainer__col2,
    bigContainer__colSm4,
    bigContainer__colSm8,
    bigContainer__colMd2,
    bigContainer__colMd10,
    bigContainer__colLg2,
    bigContainer__colLg10,
    container,
    container__row,
    heading,
    container__col12,
    container__col11,
    container__col1,
    container__col10,
    container__col2,
    hiddenSmDown,
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
    const [open, setOpen] = useState(false);
    return (
        <div style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
        }} className={bigContainerFluid}>
            {/* <Burger open={open} setOpen={setOpen} /> */}
            {/* <Menu open={open} setOpen={setOpen} /> */}
            <div className={bigContainer__row}>
                <Header siteTitle={data.site.siteMetadata.title} />
            </div>
	  		<div className={bigContainer__row}>
                {/* <div className={bigContainer__col1 + ' ' + hiddenSmDown + ' ' + bigContainer__colLg2 + ' ' + bigContainer__colMd2 + ' ' + bigContainer__colSm4}>     */}
                
                {/* </div> */}
                <main className={bigContainer__col11 + ' ' + bigContainer__colLg10 + ' ' + bigContainer__colMd10 + ' ' + bigContainer__colSm8}>
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