import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter, faLinkedin,} from '@fortawesome/free-brands-svg-icons'

import whiteLogoSmall from '../images/logo-condensed-white.png'

const Footer = (props) => {

    return (
        <footer>
            <div className='footer-container'>

                <div className='footer-logo'>
                    <img src={whiteLogoSmall} alt="condensed Revnio logo" />
                    <p>Copyright Revino LLC 2021</p>
                </div>
                <nav>
                    <ul>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="">Who We Are</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className='social-media-links'>
                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} className='social-link'/></li>
                        <li><FontAwesomeIcon icon={faFacebookF} className='social-link'/></li>
                        <li><FontAwesomeIcon icon={faTwitter} className='social-link'/></li>
                        <li><FontAwesomeIcon icon={faLinkedin} className='social-link'/></li>
                        <li><FontAwesomeIcon icon={faEnvelope} className='social-link'/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer