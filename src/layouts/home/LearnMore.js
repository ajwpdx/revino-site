import React from 'react'

import bottle from "../../images/bottle-white.png"
import droplets from '../../images/water-droplets.png'

const LearnMore = (props) => {

    return (
        <section id='learn-more'>
            <div className='section-container'>
                <img src={bottle} alt='wine bottle' className='wine-bottle'/>
                <div className='content-container'>
                    <p>We are building the refillable economy and ecosystem for glass bottles in the wine industry. Our purpose is to help develop a circular economy focused on the reuse and refilling of our glass bottles in Oregon wine communities.</p>
                    <p><strong>Why use a bottle once when it could be refilled 20 times?</strong></p>
                    <button>Learn More</button>
                </div>
                <img src={droplets} alt='water droplets' className='water-droplets'/>
            </div>
        </section>
    )

}

export default LearnMore
