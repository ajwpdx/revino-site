import React, { useState } from "react"
import "../styles/index.scss"

// import CMS from 'netlify-cms-app'
// Initialize the CMS object
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', )

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

  const [isSidebarVisible, setSideBarVisible] = useState(false)

  return (
    <>
      <Header isSidebarVisible={isSidebarVisible} setSideBarVisible={setSideBarVisible}/>
      <Welcome />
      <LearnMore />
      <HowItWorks />
      <WhyReusable />
      <Sustainability />
      <Mission />
      <Contact/>
      <Footer />

    </>
  )
}

export default IndexPage
