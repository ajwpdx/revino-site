import React from "react"
import logo from "../../images/revino-logo-white-01.png"
import oregon from "../../images/newberg-handwritten.png"



const Welcome = () => {

    return (
        <section id="welcome-to-revino">
            <div className='welcome-msg'>
                <h2>Welcome to</h2>
                <img src={logo} alt='revino logo' />
            </div>
            <div className="location-msg">
            <img id='oregon' src={oregon} alt='Newberg, Oregon' />
            </div>
        </section>
    )

}

export default Welcome