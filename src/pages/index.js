import * as React from "react"
import "../styles/index.scss"


import Header from "../layouts/Header"
import Welcome from "../layouts/home/Welcome"
import LearnMore from "../layouts/home/LearnMore"
import HowItWorks from "../layouts/home/HowItWorks"
import Mission from "../layouts/home/Mission"
import Sustainability from "../layouts/home/Sustainability"
import WhyReusable from "../layouts/home/WhyReusable"
import Footer from "../layouts/Footer"

import wavy from "../images/wavy-border.svg"

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <LearnMore />
      <div className='wavy-border-transition'>
        {/* image added to maintain width and height ratios of background image, visibility hidden */}
        <img src={wavy} alt='border' />
      </div>
      <HowItWorks />
      <WhyReusable />

      <Sustainability />
      <Mission />
      <Footer />

    </>
  )
}

export default IndexPage
