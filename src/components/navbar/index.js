import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    container__col1,
    siteTitle,
    wrapper,
    mainContainer,
    main,
    rightNavbar,
    brand,
    navbar,
    footer
} from '../../scss/5-components/navbar.module.scss'

// import logo from '../img/logo.svg';

// class Navbar extends React.Component {

//     state = { showMenu: false }

//     toggleMenu = () => {
//         this.setState({
//             showMenu: !this.state.showMenu
//         })
//     }

//     render() {
//         const menuActive = this.state.showMenu ? 'is-active' : '';
//         const burgerActive = this.state.showMenu ? 'is-active' : '';
//         return (
//             <nav className="navbar">
//                 <div className="navbar-brand">
//                     <Link className="navbar-item" to="/">
//                         <img src={logo} style={{ width: '88px' }} itemprop="image" alt="" />
//                     </Link>
//                     <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className={`navbar-menu ${menuActive}`} >
//                     <div className="navbar-start">
//                         <Link className="navbar-link" to="/" onClick={this.toggleMenu}>
//                             Home
//                         </Link>
//                         <Link className="navbar-link" to="/services" onClick={this.toggleMenu}>
//                             Services
//                         </Link>
//                         <Link className="navbar-link" to="/contact" onClick={this.toggleMenu}>
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             </nav>)
//     }
// };

// export default Navbar;

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
        
        <div className={container__col1 + ' ' + rightNavbar}>
                   
	    		  	<h3 className={brand}>DPB</h3>
	    		  	{/* <div className={navbarToggle}>
	    		  		<i className={fas}></i>
	    		  	</div> */}
	    		  	<nav className={navbar}>
                        <Header>
                        
                        </Header>
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