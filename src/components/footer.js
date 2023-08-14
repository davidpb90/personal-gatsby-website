import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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

const Footer = ({ pageTitle, children }) => {
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
        
                <footer className={footer}>
                    <Link to="/contact" className={navLinkText}>
                    Contact Me
                    </Link>
                    <p>Designed and built by David Pardo Bernal based on Bootstrap's Cover template</p>
                </footer>
    )
}

export default Footer