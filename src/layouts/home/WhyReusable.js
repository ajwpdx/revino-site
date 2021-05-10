import React from 'react'

import transitionBottleImg from '../../images/floating-bottle-banner-02.png'

const WhyReusable = (props) => {

    return (
        <section id='why-reusable'>
            <div className='section-container'>
                <h2>Why Reusable Glass Bottles?</h2>
                <ul>
                    <li><p><strong>3.37 billion single use bottles</strong> are directed to landfills each year.</p></li>
                    <li><p>Recycled glass is made up of more than <strong> 40% raw materials</strong></p></li>
                    <li><p>The U.S produces over <strong>4.8 billion bottles</strong> each year</p></li>
                </ul>
            </div>
            <div className='bottle-transition'>
                <img src={transitionBottleImg} alt='floating bottle transition image'/>
            </div>
        </section >
    )

}

export default WhyReusable
