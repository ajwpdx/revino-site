import React from 'react'
import linedUpBottles from '../../images/colorblock-bottles.png'
import recyclingBin from "../../images/colorblock-recycle-bin.png"
import bottlesInCar from '../../images/colorblock-bottles-in-car.png'
import bottleFloating from "../../images/colorblock-bottle-floating.png"
import arrow from "../../images/hand-drawn-arrow.png"


const HowItWorks = (props) => {

    return (
        <section id="how-it-works">
        <div className='section-container wider-container'>
          <h2>How It Works</h2>
          <ul>
            <li className='how-step'><img src={linedUpBottles} alt='four animated bottles'/><p>You buy Revino bottles and fill them with your world renowned Oregon wine! Consumers enjoy your wine.</p> </li>
            <li className='how-arrow' alt='arrow'><img src={arrow} alt="arrow"/></li>
            <li className='how-step narrow-img'><img src={recyclingBin} alt='four animated bottles'/><p>Consumers can use Oregon's statewide recycling service, OBRC, to drop off their refillable containers.</p></li>
            <li className='how-arrow' alt='arrow'><img src={arrow} alt="arrow"/></li>
            <li className='how-step'><img src={bottlesInCar} alt='four animated bottles'/><p> Waste management picks up our fully recyclable crates from participating collection locations.</p></li>
            <li className='how-arrow' alt='arrow'><img src={arrow} alt="arrow"/></li>
            <li className='how-step narrow-img'><img src={bottleFloating} alt='four animated bottles'/><p> We work some magic with our proprietary washing system to inspect and wash your bottles to be cleaner than new.</p></li>
          </ul>
        </div>
      </section>
    )
}

export default HowItWorks