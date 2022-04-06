import React from 'react'

const Hero = props => {
    return (
        <div className="page-hero-container">
        <div className="page-hero-content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Hero