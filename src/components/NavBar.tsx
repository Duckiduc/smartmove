import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#fff",
  position: "sticky",
}

const left = {
  display: "flex",
  alignItems: "center",
}

const logo = {
  width: "15rem",
}

const link = {
  marginLeft: "2rem",
  color: "#071D3B",
  textDecoration: "none",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "1.2rem",
  fontWeight: "bold",
}

export const NavBar = () => {
  return (
    <nav style={nav}>
      <section style={left}>
        <Link to="/" style={logo}>
          <StaticImage src="../images/smartmove-logo.png" alt="" />
        </Link>
        <Link to="/calculator" style={link}>Calculator</Link>
        <Link to="/awareness" style={link}>Awareness</Link>
      </section>
      <section>
        <Link to="https://www.free-now.com/" style={link}>FREENOW</Link>
      </section>
    </nav>
  )
}
