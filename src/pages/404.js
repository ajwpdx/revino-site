import * as React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"
import notFoundImage from "../images/colorblock-bottles-in-car.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
  marginTop: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const imgStyle = {
  width: 250,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404: Page Not Found</title>
      <h1 style={headingStyles}>404: Page Not Found</h1>
      <img style={imgStyle} src={notFoundImage} alt="not found image"/>
      <p style={paragraphStyles}>
        Sorry we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go to Homepage</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
