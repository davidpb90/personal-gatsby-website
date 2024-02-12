import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../footer'
// import ModeToggle from '../mode-toggle'
import Header from "../header"
// import { cold } from 'react-hot-loader';
// cold(Header);
import {
    bigContainer__row,
    headerContainer__row,
    headerContainer__col12,
    bigContainerFluid,
    bigContainer__col1,
    bigContainer__col11,
    bigContainer__colSm8,
    bigContainer__colMd10,
    bigContainer__colLg10,
    container__row,
    heading,
    container__col12
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
    // const [open, setOpen] = useState(false);
    return (
        // <div style={{
        //     backgroundColor: 'var(--bg)',
        //     color: 'var(--textNormal)',
        //     transition: 'color 0.2s ease-out, background 0.2s ease-out',
        //     height: `100%`,
        //     display: `flex`,
        //     flexDirection: `column`,
        // }}></div>
        <div className={bigContainerFluid}>
            {/* <Burger open={open} setOpen={setOpen} /> */}
            {/* <Menu open={open} setOpen={setOpen} /> */}
            <div className={headerContainer__row}>
                <div className={headerContainer__col12}>
                    <Header siteTitle={data.site.siteMetadata.title}/>
                </div>
            </div>
	  		<div className={bigContainer__row}>
                {/* <div className={bigContainer__col1 + ' ' + hiddenSmDown + ' ' + bigContainer__colLg2 + ' ' + bigContainer__colMd2 + ' ' + bigContainer__colSm4}>     */}
                
                {/* </div> */}
                <div className={bigContainer__col1}>
                    <h1 className={heading}>{pageTitle}</h1>
                </div>
                <main className={bigContainer__col11 + ' ' + bigContainer__colLg10 + ' ' + bigContainer__colMd10 + ' ' + bigContainer__colSm8}>
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