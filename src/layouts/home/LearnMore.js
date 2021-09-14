import React from 'react'

import bottle from "../../images/floating-bottles-01.png"
import droplets from '../../images/water-droplets.png'
import wavy from "../../images/wavy-border.png"

const LearnMore = (props) => {

    return (
        <>
            <section id='learn-more'>
                <div className='section-container'>
                    <div className='content-container'>
                        <p>We are building the refillable economy and ecosystem for glass bottles in the wine industry. Our purpose is to help develop a circular economy focused on the reuse and refilling of our glass bottles in Oregon wine communities.</p>
                        <p><strong>Why use a bottle once when it could be refilled 20 times?</strong></p>
                        <button>Learn More</button>
                    </div>
                    {/* <img src={droplets} alt='water droplets' className='water-droplets' /> */}
                </div>
                    {/* <img src={bottle} alt='wine bottle' className='floating-bottles' /> */}
            </section>
            <div className='wavy-border-transition'>
                {/* image added to maintain width and height ratios of background image, visibility hidden */}
                <img src={wavy} alt='border' />
            </div>
        </>
    )

}

export default LearnMore
