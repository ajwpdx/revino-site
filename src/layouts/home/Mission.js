import React from 'react'
import linedUpBottles from '../../images/lined-up-bottles-01.png'

const Mission = (props) => {

    return (
        <section id='mission'>
            <div className='section-container'>
                <h2>Our Mission</h2>
                <p>To build refillable bottle ecosystems in communities to help reduce the universal environmental impact of single use glass bottles and promote sustainable practices.</p>
                <img src={linedUpBottles} alt='lined up bottles animation'/>
            </div>
        </section>
    )
}

export default Mission