import React, { useState } from "react"
import condensedLogo from "../images/revino-logo-blue.png"
import { Link } from "gatsby"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = (props) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <header>
            <div className='header-container'>
                <nav className="nav-left">
                    <Link to="/#how-it-works" className="nav-link left"><span>How It Works</span></Link>
                </nav>
                <Link to="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></Link>
                <nav className="nav-right">
                    <div className="dropdown">
                        <a className="dropbtn" onClick={()=> setOpenDropdown(!openDropdown)} >Learn More <KeyboardArrowDownIcon/></a>
                        <div className={openDropdown ? "open dropdown-content" : "hidden dropdown-content"}>
                            <Link className="menu-link" to="/blog">
                                Blog
                            </Link>
                            <Link className="menu-link" to="/podcast">
                                Podcast
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default Header