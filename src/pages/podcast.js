import React, { useState } from "react"
import "../styles/index.scss"
import CircularProgress from '@mui/material/CircularProgress';

import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Hero from "../layouts/Hero"


import Contact from "../layouts/home/Contact"

// CMS.init()
// markup
const PodcastPage = () => {

    const [isLoading, setLoading] = useState(true)

    const hideSpinner = () => {
        setLoading(false)
    }

    const heroTitle = "Revino Podcast"
    const heroDescription = "Welcome to the Revino Podcast"

    return (
        <div className='page-body'>
            <Header />
            <main>
                <Hero title={heroTitle} description={heroDescription} />
                <div className="podcast-container">
                    {isLoading && <CircularProgress />}
                    <iframe 
                    onLoad={hideSpinner}
                    src="https://anchor.fm/revinobottles/embed/episodes/Rediscovering-Sustainability-e17o1td" className="podcast-player" frameborder="0" scrolling="no" ></iframe>
                </div>
            </main>
            <Footer />

        </div>
    )
}

export default PodcastPage