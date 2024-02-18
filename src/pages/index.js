import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tour from "../components/tour"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
  <Layout>
    <div>
      <p><span className="text-3xl font-axel mb-5 inline-block">Charlie loves reading.</span><br></br> Especially books about pirates. But his sister hates it – it’s boring! Can Charlie convince her that reading is fun? Perhaps if she reads a book about a pirate, who is reading a book about Goldilocks, who is reading a book about a knight…</p>      
      <p>Come and delve into a range of books with Charlie Cook, brought to life with puppetry and enchanting songs, and perhaps you will be able to help his sister discover the wonderful world inside a book…</p>      
      <Link target="_blank" rel="noopener" to="https://www.littleangeltheatre.com/email-sign-up/" className="inline-block  mr-5 mt-5 -lg bg-orange shadow-md hover:bg-slate text-slate p-3 pl-5 pr-5  rounded-xl">Sign up for our Newsletter</Link>      
      <Link rel="noopener" to="/young-author-competition" className="inline-block  mt-5 -lg bg-orange shadow-md hover:bg-slate text-slate p-3 pl-5 pr-5  rounded-xl">Young Author Competition</Link>      
      <hr className="mt-10 pl-0 border-t-4 border-light-teal"></hr>
      <h2 className="text-3xl font-axel p-10 pl-0 pb-0 mb-5">Book your tickets today!</h2>
      <h3 className="italic text-light-slate mb-5">Embark on your adventure!</h3>      
      <Tour></Tour>
      <h2>A Little Angel Theatre, Lowry and Rose Theatre co-production</h2>
      <p className="font-axel">Aimed at ages 3-8</p>
    </div>
  </Layout>
  </>
)

export const Head = () => <Seo title="Home" description="Official Website for the musical Charlie Cooks Favourite Book"/>

export default IndexPage
