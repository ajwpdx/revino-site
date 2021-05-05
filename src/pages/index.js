import * as React from "react"
import "../styles/index.scss"


import Header from "../layouts/Header"
import Welcome from "../layouts/home/Welcome"
import LearnMore from "../layouts/home/LearnMore"
import HowItWorks from "../layouts/home/HowItWorks"
import Mission from "../layouts/home/Mission"
import Sustainability from "../layouts/home/Sustainability"

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <LearnMore />
      <HowItWorks />

      <section id="why-reusable">
        <div className='section-container'>
          <h2>Why Reuse Glass Bottles?</h2>
          <ul>
            <li>3.37 billion single use bottles are directed to landfills each year.</li>
            <li>Recycled glass is made up of more than 40% raw materials</li>
            <li>The U.S produces over 4.8 billion bottles each year</li>
          </ul>
        </div>
      </section>
<Sustainability/>
      <Mission />

    </>
  )
}

export default IndexPage
