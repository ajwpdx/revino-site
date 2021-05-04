import * as React from "react"
import "../styles/index.scss"
import logo from "../images/revino-logo-white-main.png"

import Header from "../components/Header"

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      {/* <section id="home">
        <img className="logo" src={logo} alt="revino logo" />
        <h2>WEBSITE COMING SOON</h2>
      </section> */}
      <section id="welcome-to-revino">
        <div className='section-container'>
          <h2>Welcome to</h2>
          <img src={logo} alt='revino logo'/>
          <p>We are building the refillable economy and ecosystem for glass bottles in the wine industry. Our purpose is to help develop a circular economy focused on the reuse and refilling of our glass bottles in Oregon wine communities. Why use a bottle once when it could be refilled 20 times</p>
        </div>
      </section>
      <section id="how-it-works">
        <div className='section-container'>
          <h2>How It Works</h2>
          <ul>
            <li>You buy Revino bottles and fill them with your world renowned Oregon wine!</li>
            <li>Consumers enjoy your wine.</li>
            <li>Consumers can use Oregon's statewide recycling service, OBRC, to drop off their refillable containers.</li>
            <li>Waste management picks up our fully recyclable crates from participating collection locations.</li>
            <li>We work some magic with our proprietary washing system to inspect and wash your bottles to be cleaner than new.</li>
          </ul>
        </div>
      </section>
      <section id="why-reuse">
        <div className='section-container'>
          <h2>Why Reuse Glass Bottles?</h2>
          <ul>
            <li>3.37 billion single use bottles are directed to landfills each year.</li>
            <li>Recycled glass is made up of more than 40% raw materials</li>
            <li>The U.S produces over 4.8 billion bottles each year</li>
          </ul>
        </div>
      </section>
      <section id='sustainability'>
        <div className="section-container">
          <h2>Sustainability</h2>
          <ul>
            <li className='circle-1'><strong>95%</strong><p>Lower carbon footprint</p></li>
            <li className='circle-2'><strong>82%</strong><p>Lower water</p></li>
            <li className='circle-3'><strong>92%</strong><p>Lower energy</p></li>
          </ul>

        </div>
      </section>
      <section id='contact'>
        <div className="section-container">

        <h2>The refillable bottle economy is here to stay, how are you going to play a role? </h2>
        {/* <p>Partner with us for the refillable movement</p> */}
        <button>Contact Us</button>
        </div>
      </section>

    </>
  )
}

export default IndexPage
