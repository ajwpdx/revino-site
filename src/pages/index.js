import React, { useState } from "react"
import "../styles/index.scss"

import Header from "../layouts/Header"
import Welcome from "../layouts/home/Welcome"
import LearnMore from "../layouts/home/LearnMore"
import HowItWorks from "../layouts/home/HowItWorks"
import Mission from "../layouts/home/Mission"
import Sustainability from "../layouts/home/Sustainability"
import WhyReusable from "../layouts/home/WhyReusable"
import Footer from "../layouts/Footer"


import Contact from "../layouts/home/Contact"

// CMS.init()
// markup
const IndexPage = () => {



  return (
    <div className='.page-body'>
      <Header />
      <main>
        <Welcome />
        <LearnMore />
        <HowItWorks />
        <WhyReusable />
        <Sustainability />
        <Mission />
        <Contact />
      </main>
      <Footer />

    </div>
  )
}

export default IndexPage
