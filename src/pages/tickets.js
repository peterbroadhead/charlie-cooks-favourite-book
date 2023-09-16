import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tour from "../components/tour"

const TicketsPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">Book your tickets today!</h1>
      <h2 className="italic text-light-slate">Embark on your adventure!</h2>      
      <Tour></Tour>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Tickets" description="Book your tickets to see Charlie Cooks Favourite Book at a theatre near you."/>

export default TicketsPage
