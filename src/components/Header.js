import React from "react"
import condensedLogo from "../images/revino-logo-condensed-dark.png" 
import logo from "../images/revino-logo-white-main.png"

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="header-nav">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="">Who We Are</a></li>
                    <li><a href=""><img src={condensedLogo} alt="small revino logo" className="header-logo"/></a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header