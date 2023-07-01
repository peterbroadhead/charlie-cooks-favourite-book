import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
// import Tour from "../components/tour"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Charlie Cook's Favourite Book
      </h1>
      <h2>
        Coming to the <a href="https://www.littleangeltheatre.com/" className={"button_lat"}>Little Angel Theatre</a> and across the UKin 2023 / 2024
      </h2>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
