import React, { useState, useEffect } from "react"
import condensedLogo from "../images/revino-logo-blue.png"

const headerLinks = ["HOW IT WORKS", "WHO WE ARE", "BLOG", "CONTACT"]

const Header = () => {

    return (
        <header>
            <nav className="desktop-nav">
            <a href="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></a>
                <a href="/" className="nav-link">How It Works</a>
                <a href="/blog" className="nav-link">Blog</a>
            </nav>

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