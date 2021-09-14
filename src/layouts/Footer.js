import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter, faLinkedin,} from '@fortawesome/free-brands-svg-icons'

import whiteLogoSmall from '../images/revino-logo-white-02.png'

const currentDate = new Date

const Footer = (props) => {

    return (
        <footer>
            <div className='footer-container'>

                <div className='footer-logo'>
                    <img src={whiteLogoSmall} alt="condensed Revnio logo" />
                    <p>Copyright Revino LLC {currentDate.getFullYear()}</p>
                </div>
                <nav>
                    <ul>
                    <li><a href="#how-it-works">How It Works</a></li>
                    {/* <li><a href="">Who We Are</a></li> */}
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="mailto:keenan@revinobottles">Contact</a></li>
                    </ul>
                </nav>
                <div className='social-media-links'>
                    <ul>
                        <li><a href = "https://www.instagram.com/revinobottles/" ><FontAwesomeIcon icon={faInstagram} className='social-link'/></a></li>
                        <li><a href = "https://www.facebook.com/RevinoBottles" ><FontAwesomeIcon icon={faFacebookF} className='social-link'/></a></li>
                        {/* <li><FontAwesomeIcon icon={faTwitter} className='social-link'/></li>
                        <li><FontAwesomeIcon icon={faLinkedin} className='social-link'/></li> */}
                        <li><a href = "mailto:keenan@revinobottles" ><FontAwesomeIcon icon={faEnvelope} className='social-link'/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer