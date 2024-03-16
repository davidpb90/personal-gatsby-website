import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

// import Footer from '../footer'
// import ModeToggle from '../mode-toggle'
// import Header from "../header"
// import { cold } from 'react-hot-loader';
// cold(Header);
import {
    mainContainer__row,
    mainContainer__col12,
    heading,
    textStart
} from '../../scss/5-components/main-page.module.scss'


const MainPage = ({ pageTitle, children }) => {
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
        <div className={mainContainer__row}>
            <div className={mainContainer__col12}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </div>
        </div>
    )
}

export default MainPage