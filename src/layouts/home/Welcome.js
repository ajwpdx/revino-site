import React from "react"
import logo from "../../images/revino-logo-white-main.png"


const Welcome = () => {

    return (
        <section id="welcome-to-revino">
            <div className='title-container'>
                <h2>Welcome to</h2>
                <img src={logo} alt='revino logo' />
            </div>
        </section>
    )

}

export default Welcome