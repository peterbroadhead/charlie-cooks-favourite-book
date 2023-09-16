import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CastPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">Meet the Cast</h1>
      <h2 className="text-light-slate italic">The wonderful team that brings the show to life.</h2>      
      <p>Coming soon...</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Cast" description="Meet the team behind Charlie Cooks Favourite Book" />

export default CastPage
