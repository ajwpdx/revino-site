import React, { useState, useEffect } from "react"
import condensedLogo from "../images/revino-logo-blue.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "./Sidebar"



const headerLinks = ["HOW IT WORKS", "WHO WE ARE", "BLOG", "CONTACT"]

const Header = (props) => {
    const [isSidebarVisible, setSideBarVisible] = useState(false)
    let sidebar

    if(isSidebarVisible){
        sidebar = <Sidebar isSidebarVisible={isSidebarVisible}/>
    }

    return (
        <header>
            <div className='header-container'>
                <a href="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></a>
                <nav style={{visibility: isSidebarVisible ? "hidden" : ""}} className="desktop-nav">
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="/blog" className="nav-link">Blog</a>
                </nav>
                <FontAwesomeIcon onClick={()=>setSideBarVisible(true) } icon={faBars} className='hamburger-bars'/>
            </div>
            {sidebar}
        </header>
    )

}

export default Header