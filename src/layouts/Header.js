import React, { useState, useEffect } from "react"
import condensedLogo from "../images/revino-logo-blue.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "./Sidebar"



const headerLinks = ["HOW IT WORKS", "WHO WE ARE", "BLOG", "CONTACT"]

const Header = (props) => {
    const [isSidebarVisible, setSideBarVisible] = useState(false)
    const hamburgerMenu = <FontAwesomeIcon onClick={() => setSideBarVisible(true)} icon={faBars} className='hamburger-bars' />
    const cancelMenu = <FontAwesomeIcon onClick={() => setSideBarVisible(false)} icon={faTimes} className='hamburger-bars' />
    let sidebar

    if (isSidebarVisible) {
        sidebar = <Sidebar isSidebarVisible={isSidebarVisible} />
    }

    return (
        <header>
            <div className='header-container'>
                <nav style={{ visibility: isSidebarVisible ? "hidden" : "" }} className="nav-left nav">
                    <a href="www.revinobottles.com/#how-it-works" className="nav-link left"><span>How It Works</span></a>
                </nav>
                <a href="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></a>
                <nav style={{ visibility: isSidebarVisible ? "hidden" : "" }} className="nav-right nav">
                    <a href="/blog" className="nav-link right"><span>Blog</span></a>
                </nav>
                {!isSidebarVisible && hamburgerMenu}
                {isSidebarVisible && cancelMenu}

            </div>
            {sidebar}
        </header>
    )

}

export default Header