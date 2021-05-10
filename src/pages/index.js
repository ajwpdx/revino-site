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

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <LearnMore />
      <HowItWorks />
      <WhyReusable />

      <Sustainability />
      <Mission />
      <Footer/>

    </>
  )
}

export default IndexPage
