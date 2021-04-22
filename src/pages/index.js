import * as React from "react"
import "../styles/index.scss"
import logo from "../images/revino-logo-white-main.png"

import Header from "../components/Header"

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <section id="home">

        <img className="logo" src={logo} alt="revino logo" />
        <h2>WEBSITE COMING SOON</h2>
      </section>
      <section id="how-it-works">

      </section>
    </>
  )
}

export default IndexPage
