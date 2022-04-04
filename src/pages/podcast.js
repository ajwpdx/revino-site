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
const PodcastPage = () => {



    return (
        <div className='page-body'>
            <Header />
            <main>
                <iframe src="https://anchor.fm/revinobottles/embed/episodes/Rediscovering-Sustainability-e17o1td" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
            </main>
            <Footer />

        </div>
    )
}

export default PodcastPage
