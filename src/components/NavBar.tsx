import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const NavBar = () => {
  return (
    <nav>
      <section>
        <Link to="/">
          <StaticImage src="../images/smartmove-logo.png" alt="" />
        </Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/awareness">Awareness</Link>
      </section>
      <section>
        <Link to="https://www.free-now.com/">FREENOW</Link>
      </section>
    </nav>
  )
}
