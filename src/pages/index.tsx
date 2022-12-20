import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { NavBar } from "../components/NavBar"
import * as styles from "./index.module.scss"

const texts = [
  {
    title: "MOVE AROUND...",
    description: "Smart move allows you to estimate the cost (financial and ecological) of acquiring a car per year and suggests alternatives."
  },
  {
    title: "Financial cost",
    description: "Smart move allows to establish the financial cost of the acquisition and maintenance of a personal car. We use city statistics to get an estimate. We only need: the price of the car and its insurance and the price of the parking & the type of gasoline of the car as well as an estimation of the mileage with the consumption"
  },
  {
    title: "Ecological cost",
    description: "Smart move allows to establish the ecological cost of the acquisition and the use of a car. We base our calculations on average CO2 emissions. We only need: the type of gasoline of the car as well as an estimation of the mileage with the consumption & the CO2 emission rate"
  },
  {
    title: "Alternatives",
    description: "There are many alternatives to the car. Smart move recommends the best alternative means of transportation for your use. And the information you have entered. Smart move tries to offer you as many alternatives as possible so that you can make the best possible choice."
  },
  {
    title: "OWNING A CAR IS NOT CHEAP.",
    description: "Owning a car is a big expense. It generates a number of costs that we do not imagine (insurance, maintenance, parking ...). In general we are unable to estimate it. That's why Smart move exists and helps you find the best possible alternative."
  },
  {
    title: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <section className={styles.moveAroundSection}>
        <StaticImage src="../images/city.png" alt="" className={styles.moveAroundSection__background} />
        <div className={styles.moveAroundSection__descriptor}>
          <div>
            <h1>{texts[0].title}</h1>
            <p>{texts[0].description}</p>
            <Link to="/calculator" className={styles.calculatorButton}>
              ACCESS THE CALCULATOR
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.conceptsSection}>
        <StaticImage src="../images/arrow-down.png" alt="" className={styles.conceptsSection__arrow}/>
        <h1 className={styles.conceptsSection__title}>THE CONCEPT</h1>
        <div className={styles.conceptsSection__concepts}>
          <div className={styles.concept}>
            <h2 className={styles.concept__title}>{texts[1].title}</h2>
            <p>{texts[1].description}</p>
          </div>
          <div className={styles.concept}>
            <h2 className={styles.concept__title}>{texts[2].title}</h2>
            <p>{texts[2].description}</p>
          </div>
          <div className={styles.concept}>
            <h2 className={styles.concept__title}>{texts[3].title}</h2>
            <p>{texts[3].description}</p>
          </div>
        </div>
      </section>
      <section className={styles.owningSection}>
        <h1>{texts[4].title}</h1>
        <p className={styles.owningSection__description}>{texts[4].description}</p>
      </section>
      <section className={styles.descriptionSection}>
        <p>{texts[5].description}</p>
      </section>
      <footer>
        <StaticImage src="../images/footer.png" alt="" />
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
