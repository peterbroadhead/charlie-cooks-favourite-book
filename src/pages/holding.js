import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import Tour from "../components/tour"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        Charlie Cook's Favourite Book
      </h1>
      <h2>
        Coming to the <a href="https://www.littleangeltheatre.com/" className={"button_lat"}>Little Angel Theatre</a> and across the UK in 2023 / 2024
      </h2>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
