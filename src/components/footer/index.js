import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    p,
    navLinkText,
    footer
} from '../../scss/5-components/footer.module.scss'

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
                    {/* <Link to="/contact" className={navLinkText}>
                    Contact Me
                    </Link> */}
                    <p className={p}>Designed and built by David Pardo Bernal</p>
                </footer>
    )
}

export default Footer