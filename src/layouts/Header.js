import React, {useState} from "react"
import condensedLogo from "../images/revino-logo-plum-02.png" 

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(true)

    return (
        <header >
            <nav>
                <ul className="header-nav">
                    <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
                    <li><a href="" className="nav-link">Who We Are</a></li>
                    <li><a href=""><img src={condensedLogo} alt="small revino logo" className="header-logo"/></a></li>
                    <li><a href="" className="nav-link">Blog</a></li>
                    <li><a href="" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header