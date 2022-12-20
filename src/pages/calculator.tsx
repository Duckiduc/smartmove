import * as React from "react"
import type { PageProps } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { NavBar } from "../components/NavBar"
import * as styles from "./calculator.module.scss"

const averagePrices = [
  {
    description: "Calculations based on actual average prices"
  },
  {
    description: "Average SP98 price: "
  },
  {
    description: "Average maintenance costs: "
  },
  {
    description: "Average parking price in Paris: "
  }
]

const CalculatorPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <section>
        <StaticImage src="../images/crosswalk.png" alt="" className={styles.background} />
        <div>
          <div>
            <h1>ON THE MOVE?</h1>
          </div>
        </div>
      </section>
      <footer>
        <StaticImage src="../images/footer.png" alt="" />
      </footer>
    </main>
  )
}

export default CalculatorPage
