import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../footer'
// import ModeToggle from '../mode-toggle'
import Header from "../header"
// import { cold } from 'react-hot-loader';
// cold(Header);
import {
    centralContainer__row,
    headerContainer__row,
    headerContainer__col12,
    generalContainerFluid,
    centralContainer__col1,
    centralContainer__col11,
    centralContainer__colSm8,
    centralContainer__colMd10,
    centralContainer__colLg10,
    footerContainer__row,
    heading,
    footerContainer__col12
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
        <div className={generalContainerFluid}>
            {/* <Burger open={open} setOpen={setOpen} /> */}
            {/* <Menu open={open} setOpen={setOpen} /> */}
            <div className={headerContainer__row}>
                <div className={headerContainer__col12}>
                    <Header siteTitle={data.site.siteMetadata.title}/>
                </div>
            </div>
	  		<div className={centralContainer__row}>
                {/* <div className={bigContainer__col1 + ' ' + hiddenSmDown + ' ' + bigContainer__colLg2 + ' ' + bigContainer__colMd2 + ' ' + bigContainer__colSm4}>     */}
                
                {/* </div> */}
                <div className={centralContainer__col1}>
                    <h1 className={heading}>{pageTitle}</h1>
                </div>
                <main className={centralContainer__col11 + ' ' + centralContainer__colLg10 + ' ' + centralContainer__colMd10 + ' ' + centralContainer__colSm8}>
                    {children}
	    			{/* <h1 className={text}-left py-1 px-2 mx-2">David Pardo Bernal</h1> */}
	    			{/* <p className={lead} py-1 px-2 mx-2">A personal and professional repository.</p> */}
	    			{/* <p className={lead}"> */}
	    			{/* </p> */}
	    		    {/* <script src="js/p5-sketches.js"></script> */}
	    		</main>
	    		
	  		</div>
            <div className={footerContainer__row}>
                <div className={footerContainer__col12}>   
                    <Footer>
                    </Footer>
                </div>
            </div>	
		</div>
        
       
    )
}

export default Layout