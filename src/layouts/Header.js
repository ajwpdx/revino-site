import React, { useState } from "react"
import condensedLogo from "../images/revino-logo-plum-02.png"

import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('Header', Header)

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(true)

    return (
        <header >
            <nav>
                <ul className="header-nav-links">
                    <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
                    <li><a href="" className="nav-link">Who We Are</a></li>
                </ul>
                <a href="" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></a>
                <ul className="header-nav-links">
                    <li><a href="" className="nav-link">Blog</a></li>
                    <li><a href="" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header