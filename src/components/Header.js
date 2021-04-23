import React from "react"
import condensedLogo from "../images/revino-logo-condensed-dark.png" 
import logo from "../images/revino-logo-white-main.png"

const Header = () => {

    return (
        <header>
            <nav>
            <a href=""><img src={condensedLogo} alt="small revino logo" className="header-logo"/></a>
                <ul className="header-nav">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="">Who We Are</a></li>
                    <li><a href="">Who We Are</a></li>
                    <li><a href="">Who We Are</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header