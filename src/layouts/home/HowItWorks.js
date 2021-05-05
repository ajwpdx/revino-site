import React from 'react'
import bottleFloating from "../../images/bottle-floating-01.png"
import bottlesInCar from '../../images/bottles-in-car-01.png'
import linedUpBottles from '../../images/lined-up-bottles-01.png'
import recyclingBin from "../../images/recycling-bin-01.png"
import arrow from "../../images/temp-arrow.png"


const HowItWorks = (props) => {

    return (
        <section id="how-it-works">
        <div className='section-container wider-container'>
          <h2>How It Works</h2>
          <ul>
            <li className='how-step'><img src={linedUpBottles} alt='four animated bottles'/><p>You buy Revino bottles and fill them with your world renowned Oregon wine! Consumers enjoy your wine.</p> </li>
            <li className='how-arrow' alt='arrow'><img src={arrow}/></li>
            <li className='how-step'><img src={recyclingBin} alt='four animated bottles'/><p>Consumers can use Oregon's statewide recycling service, OBRC, to drop off their refillable containers.</p></li>
            <li className='how-arrow' alt='arrow'><img src={arrow}/></li>
            <li className='how-step'><img src={bottlesInCar} alt='four animated bottles'/><p> Waste management picks up our fully recyclable crates from participating collection locations.</p></li>
            <li className='how-arrow' alt='arrow'><img src={arrow}/></li>
            <li className='how-step'><img src={bottleFloating} alt='four animated bottles'/><p> We work some magic with our proprietary washing system to inspect and wash your bottles to be cleaner than new.</p></li>
          </ul>
        </div>
      </section>
    )
}

export default HowItWorks