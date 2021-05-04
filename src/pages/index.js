import * as React from "react"
import "../styles/index.scss"


import Header from "../layouts/Header"
import WelcomeSection from "../layouts/home/WelcomeSection"
import LearnMoreSection from "../layouts/home/LearnMoreSection"
import HowItWorks from "../layouts/home/HowItWorks"

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <WelcomeSection/>
      <LearnMoreSection />
      <HowItWorks/>

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
