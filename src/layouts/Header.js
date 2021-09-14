import React, { useState, useEffect } from "react"
import condensedLogo from "../images/revino-logo-blue.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'

const headerLinks = ["HOW IT WORKS", "WHO WE ARE", "BLOG", "CONTACT"]

const Header = () => {

    return (
        <header>
            <div className='header-container'>
                <a href="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></a>
                <nav className="desktop-nav">
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="/blog" className="nav-link">Blog</a>
                </nav>
                <a href = "https://www.facebook.com/RevinoBottles" ><FontAwesomeIcon icon={faBars} className='hamburger-bars'/></a>
            </div>
            <nav className="mobile-nav hidden">
                <ul>
                    <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
                    <li><a href="" className="nav-link">Blog</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header