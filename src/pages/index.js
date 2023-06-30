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
        Coming to the <a href="https://www.littleangeltheatre.com/" style={{"border-radius":"4px","background":"#FE552E", "color":"white", "padding":"5px"}}>Little Angel Theatre</a> in 2023 / 2024
      </h2>
      <StaticImage
        src="../images/charliecook.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />

    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
