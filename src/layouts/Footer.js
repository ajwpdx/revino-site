import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF,} from '@fortawesome/free-brands-svg-icons'
import {socialMedia, emailAddresses} from "../data/ExternalLinks"
import { Link } from "gatsby"

import whiteLogoSmall from '../images/revino-logo-white-02.png'

const currentDate = new Date()

const Footer = (props) => {

    return (
        <footer>
            <div className='footer-container'>

                <div className='footer-logo'>
                    <Link to="/">
                    <img src={whiteLogoSmall} alt="condensed Revnio logo" />
                    </Link>
                    <p>Copyright Revino LLC {currentDate.getFullYear()}</p>
                </div>
                <nav>
                    <ul>
                    <li><Link to="/#how-it-works">How It Works</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/podcast">Podcast</Link></li>
                    <li><a href="mailto:keenan@revinobottles">Contact</a></li>
                    </ul>
                </nav>
                <div className='social-media-links'>
                    <ul>
                        <li><a href = {socialMedia.INSTAGRAM} ><FontAwesomeIcon icon={faInstagram} className='social-link'/></a></li>
                        <li><a href = {socialMedia.FACEBOOK} ><FontAwesomeIcon icon={faFacebookF} className='social-link'/></a></li>
                        <li><a href = {emailAddresses.KEENAN_OHEARN} ><FontAwesomeIcon icon={faEnvelope} className='social-link'/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer