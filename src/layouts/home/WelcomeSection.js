import React from "react"
import logo from "../../images/revino-logo-white-main.png"


const WelcomeSection = () => {

    return (
        <section id="welcome-to-revino">
            <div className='section-container'>
                <h2>Welcome to</h2>
                <img src={logo} alt='revino logo' />
                
            </div>
        </section>
    )

}

export default WelcomeSection