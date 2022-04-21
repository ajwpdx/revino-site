import React, { useState, useEffect } from "react"
import condensedLogo from "../images/revino-logo-blue.png"
import { Link } from "gatsby"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [isSidebarVisible, setSideBarVisible] = useState(false)
    // const hamburgerMenu = <FontAwesomeIcon onClick={() => setSideBarVisible(true)} icon={faBars} className='hamburger-bars' />
    // const cancelMenu = <FontAwesomeIcon onClick={() => setSideBarVisible(false)} icon={faTimes} className='hamburger-bars' />
    let sidebar

    if (isSidebarVisible) {
        // sidebar = <Sidebar isSidebarVisible={isSidebarVisible} />
    }

    return (
        <header>
            <div className='header-container'>
                <nav style={{ visibility: isSidebarVisible ? "hidden" : "" }} className="nav-left">
                    <Link to="/#how-it-works" className="nav-link left"><span>How It Works</span></Link>
                </nav>
                <Link to="/" className="header-logo" ><img src={condensedLogo} alt="small revino logo" /></Link>
                <nav className="nav-right">
                    <a
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="dropdown-nav-link right"
                    >
                        <p>Learn More</p>
                        <KeyboardArrowDownIcon className="dropdown_carrot" />

                    </a>
                    <Menu
                        className="menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}

                    >
                        <Link to="/blog">
                            <MenuItem className="menu-item" onClick={handleClose}>
                                Blog
                            </MenuItem>
                        </Link>
                        <Link to="/podcast">
                            <MenuItem className="menu-item" onClick={handleClose}>
                                Pocast
                            </MenuItem>
                        </Link>
                    </Menu>
                </nav>
            </div>
        </header>
    )

}

export default Header